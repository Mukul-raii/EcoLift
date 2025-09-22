import { DriverProfile, Ride } from '@rider/db'
import {
  errorLogger,
  findAvailableDriver,
  logger,
  ServerError,
} from '@rider/shared'
import { stat } from 'fs'
import { RideRepository } from '../repositories/ride.repository'
import { log } from 'console'
import { RideService } from '../services/Ride.service'

export class RideController {
  private rideService = new RideService()

  constructor() {
    this.rideService = new RideService()
  }

  async requestRide(rideData: any, io: any) {
    try {
      const { driver, updateRide } = await this.rideService.requestRide(
        rideData,
        io,
      )
      return { driver, updateRide }
    } catch (error) {
      throw new ServerError('Error requesting ride', error)
    }
  }

  async updateRideStatus(rideId: string, io: any) {
    try {
      await this.rideService.updateRideStatus(rideId, io)
    } catch (error) {
      throw new ServerError('Error updating ride status', error)
    }
  }
}
