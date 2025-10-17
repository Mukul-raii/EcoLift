import { prisma, Ride } from '@rider/db'
import {
  AuthenticationError,
  errorLogger,
  ServerError,
} from '@rider/shared/dist'
import { AUTH_ERRORS } from '@rider/shared/dist/constants/auth.constant'
import { resUser } from '@rider/shared/dist/Types/userTypes'
import { RideRepository } from './ride.repository'
import { RideQueue } from './ride.queue'

export const startRide = async (
  from: string,
  to: string,
  pickupLat: number,
  pickupLong: number,
  dropoffLat: number,
  dropoffLong: number,
  userId: string,
) => {
  // Simulate ride finding logic
  try {
    return await prisma.ride.create({
      data: {
        fromLocation: from,
        toLocation: to,
        status: 'REQUESTED',
        pickUpLat: pickupLat,
        pickUpLong: pickupLong,
        dropOffLat: dropoffLat,
        dropOffLong: dropoffLong,
        riderId: userId,
      },
    })
  } catch (error) {
    console.error('Error creating ride:', error)
    throw new Error('Error creating ride')
  }
}

interface startRide {
  from: string
  to: string
  pickupLat: number
  pickupLong: number
  dropoffLat: number
  dropoffLong: number
}

export class RideService {
  private rideRepository: RideRepository
  private rideQueue: RideQueue

  constructor() {
    this.rideRepository = new RideRepository()
    this.rideQueue = new RideQueue()
  }

  async startRide(user: resUser, data: startRide) {
    //validate data
    try {
      console.log('Starting ride with data:', 'for user:', user)
      await this.validateStartRideData(user, data)
      console.log('validated')

      const ride = await this.rideRepository.createRide(data, user.firebaseUid)
      console.log('Ride created:', ride)
      return ride
    } catch (error) {
      throw new ServerError('Error starting ride', error)
    }
  }

  async fetchLiveRides(user: resUser) {
    try {
      console.log('Fetching live rides for user:', user, 'and rideId:')
      await this.validateFetchLiveRidesData(user)
      console.log('validated')
      const ride = await this.rideRepository.getRideById(user.firebaseUid)
      console.log('Ride fetched:', ride)
      return ride
    } catch (error) {
      throw new ServerError('Error fetching live rides', error)
    }
  }

  async getRides(user: resUser) {
    try {
      const rides = await this.rideRepository.getRides(user)
      return rides
    } catch (error) {
      throw new ServerError('Error fetching rides', error)
    }
  }
  async validateStartRideData(user: resUser, data: startRide) {
    if (!user || user.role !== 'RIDER') {
      errorLogger('User not authenticated or not a rider')
      throw new AuthenticationError(
        'User not authenticated or not a rider',
        AUTH_ERRORS.USER_NOT_FOUND,
        401,
      )
    }
    if (!data.from || !data.to) {
      errorLogger('Pickup and dropoff locations are required')
      throw new Error('Pickup and dropoff locations are required')
    }
  }

  async validateFetchLiveRidesData(user: resUser) {
    if (!user || user.role !== 'RIDER') {
      errorLogger('User not authenticated or not a rider')
      throw new AuthenticationError(
        'User not authenticated or not a rider',
        AUTH_ERRORS.USER_NOT_FOUND,
        401,
      )
    }
  }

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

  async findDriver() {
    // Find first available driver
    const result = await this.rideRepository.findAvailableDriver()
    // No driver available
    if (!result) {
      return null
    }
    return result
  }

  async updateRide(rideData: Ride): Promise<Ride> {
    try {
      const updateRide = await this.rideRepository.updateRide(rideData)
      return updateRide
    } catch (error) {
      throw new ServerError('Error updating ride', error)
    }
  }

  async updateRideAndDriver(updateData: Partial<Ride>) {
    try {
      const updateRide =
        await this.rideRepository.updateRideAndDriver(updateData)
      return updateRide
    } catch (error) {
      throw new ServerError('Error updating ride', error)
    }
  }
}
