import { Request, Response } from 'express'
import { getDriverRides, RideService } from '../services/ride.service'
import { errorLogger, errorResponse, successResponse } from '@rider/shared/dist'

export class RideController {
  private rideService: RideService
  constructor() {
    this.rideService = new RideService()
  }

  async getDriverLiveRide(req: Request, res: Response) {
    const user = req.user
    if (!user) {
      return res.status(400).json({ message: 'User not authenticated' })
    }
    try {
      const result = await this.rideService.getDriverLiveRide(user.id)
      successResponse(res, 200, 'Rides fetched successfully', result)
    } catch (error) {
      errorLogger('Error fetching live ride', error)
      errorResponse(res, 200, 'Failed to fetch live ride', error)
    }
  }

  async getdriverRides(req: Request, res: Response) {
    const user = req.user
    if (!user) {
      return res.status(400).json({ message: 'User not authenticated' })
    }
    try {
      const result = await this.rideService.getDriverRides(user.id)
      successResponse(res, 200, 'Rides fetched successfully', result)
    } catch (error) {
      errorLogger('Error fetching rides', error)
      errorResponse(res, 200, 'Failed to fetch rides', error)
    }
  }
}
