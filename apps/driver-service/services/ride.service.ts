import { RideRepository } from '../repositories/ride.repository'
import { errorLogger, ServerError } from '@rider/shared/dist'

export class RideService {
  private rideRepository: RideRepository

  constructor() {
    this.rideRepository = new RideRepository()
  }

  getDriverLiveRide = async (driverId: string) => {
    try {
      const result = await this.rideRepository.findLiveRideById(driverId)
      return result
    } catch (error) {
      errorLogger('Error fetching live ride', error)
      throw new ServerError('Failed to fetch live ride')
    }
  }

  getDriverRides = async (driverId: string) => {
    try {
      const result = await this.rideRepository.findDriverRides(driverId)
      return result
    } catch (error) {
      errorLogger('Error fetching rides', error)
      throw new ServerError('Failed to fetch rides')
    }
  }

  updateRideStatus = async (userId: string, rideId: number, status: string) => {
    try {
      const result = await this.rideRepository.updateRideStatus(
        userId,
        rideId,
        status,
      )
      return result
    } catch (error) {
      errorLogger('Error updating ride status', error)
      throw new ServerError('Failed to update ride status')
    }
  }
}
