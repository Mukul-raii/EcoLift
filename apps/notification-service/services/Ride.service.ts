import { errorLogger, logger, ServerError } from '@rider/shared'
import { RideController } from '../controller/Rider.controller'
import { RideRepository } from '../repositories/ride.repository'
import { DriverProfile, Ride } from '@rider/db'

export class RideService {
  private rideRepository = new RideRepository()

  constructor() {
    this.rideRepository = new RideRepository()
  }
  //main function to handle ride request
  async requestRide(rideData: any, io: any) {
    try {
      const ride = await this.findRide(rideData)
      logger('Ride requested in requestRide:', ride)
      io.to(`rider:${rideData.riderId}`).emit('rideUpdate', ride)
      // Find first available driver
      let driver: DriverProfile | null = null

      driver = await this.findDriver()
      if (!driver) {
        return io.to(`rider:${rideData.riderId}`).emit('rideUpdate', {
          status: 'Searching',
        })
      }

      logger('Driver found in requestRide:', driver)

      //update ride
      ride.status = 'REQUESTED'
      ride.driverId = driver.userId
      console.log('Emitting rideRequested to driver:', driver.userId)
      io.to(`driver:${driver.userId}`).emit('rideRequested', ride)
    } catch (error) {
      throw new ServerError('Error requesting ride', error)
    }
  }
  // 1- create ride with status REQUESTED
  async findRide(rideData: Partial<Ride>): Promise<Ride> {
    try {
      const ride = await this.rideRepository.findRide(rideData)
      if (!ride) {
        throw new ServerError('Error creating ride', 'Ride creation failed')
      }
      return ride
    } catch (error) {
      throw new ServerError('Error creating ride', error)
    }
  }
  //2- find available driver
  async findDriver() {
    // Find first available driver
    const result = await this.rideRepository.findAvailableDriver()
    // No driver available
    if (!result) {
      return null
    }
    return result
  }
  //3- update ride and driver status atomically
  async updateRideandDriverStatus(
    rideData: Partial<Ride>,
    driverId: string,
    status: string,
  ) {
    try {
      const updateRide = await this.rideRepository.updateRideAndDriver(
        rideData,
        driverId,
        status,
      )
      return updateRide
    } catch (error) {
      errorLogger('Error updating ride:', error)
      throw new ServerError('Error updating ride', error)
    }
  }

  //Update ride status
  async updateRideStatus(rideData: any, io: any) {
    try {
      //get update ride status
      const ride = await this.rideRepository.findRide(rideData)
      //check status
      const status = await this.checkRideStatus(rideData.status)

      if (status) {
        const ride = {
          ...rideData,
          status: 'ASSIGNED',
        }
        // update ride and driver status
        const updateRide = await this.updateRideandDriverStatus(
          ride,
          ride.driverId,
          'UNAVAILABLE',
        )

        io.to(`driver:${ride.driverId}`).emit('newRide', updateRide)
        io.to(`rider:${ride.riderId}`).emit('rideUpdate', updateRide)
        logger('Ride assigned in requestRide:', updateRide)
      } else {
        //remove driver
        const result = await this.rideRepository.removeDriverFromRide(rideData)
        //try to find another driver and start the ride
        this.requestRide(result, io)
      }
    } catch (error) {
      errorLogger('Error updating ride:', error)
      throw new ServerError('Error updating ride', error)
    }
  }

  //check the ride status
  async checkRideStatus(status: string) {
    if (status === 'ACCEPTED') {
      return true
    }
    if (status === 'REJECTED') {
      return false
    }
  }
}
