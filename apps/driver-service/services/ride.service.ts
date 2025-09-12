import { prisma } from '@rider/db'
import { RideRepository } from '../repositories/ride.repository'
import { errorLogger, ServerError } from '@rider/shared/dist'
import { Server } from 'http'

export class RideService {
  private rideRepository: RideRepository
  constructor() {
    this.rideRepository = new RideRepository()
  }

  async getDriverLiveRide(driverId: string) {
    try {
      const result = await this.rideRepository.findLiveRideById(driverId)
      return result
    } catch (error) {
      errorLogger('Error fetching live ride', error)
      throw new ServerError('Failed to fetch live ride')
    }
  }
  async getDriverRides(driverId: string) {
    try {
      const result = await this.rideRepository.findDriverRides(driverId)
      return result
    } catch (error) {
      errorLogger('Error fetching rides', error)
      throw new ServerError('Failed to fetch rides')
    }
  }
}
