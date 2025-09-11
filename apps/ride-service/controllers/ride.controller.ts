import { Request, Response } from 'express'
import { RideService, startRide } from '../services/ride.service'
import {
  errorLogger,
  logger,
  ServerError,
  successResponse,
} from '@rider/shared/dist'

export class RideController {
  private rideService: RideService
  constructor() {
    this.rideService = new RideService()
  }
  findRide = async (req: Request, res: Response): Promise<Response> => {
    const user = req.user
    const { from, to, pickupLat, pickupLong, dropoffLat, dropoffLong } =
      req.body
    const data = {
      from,
      to,
      pickupLat,
      pickupLong,
      dropoffLat,
      dropoffLong,
    }

    try {
      const result = await this.rideService.startRide(user, data)
      logger('Ride started successfully:', result)
      return successResponse(res, 'Ride started successfully', result, 200)
    } catch (error) {
      errorLogger('Error starting ride:', error)
      throw new ServerError('Error starting ride', error)
    }
  }
}
