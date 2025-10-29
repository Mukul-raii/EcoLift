import { Request, Response } from 'express'
import { getDriverRides, RideService } from '../services/ride.service'
import { errorLogger, errorResponse, successResponse } from '@rider/shared/dist'

export class RideController {
  private rideService: RideService
  constructor() {
    this.rideService = new RideService()
  }

  getDriverLiveRide = async (req: Request, res: Response) => {
    const user = req.user
    if (!user) {
      return res.status(400).json({ message: 'User not authenticated' })
    }
    try {
      const result = await this.rideService.getDriverLiveRide(user.id)
      successResponse(res, 200, 'Rides fetched successfully', result)
    } catch (error) {
      errorLogger('Error fetching live ride', error)
      errorResponse(res, 500, 'Failed to fetch live ride', error)
    }
  }

  getdriverRides = async (req: Request, res: Response) => {
    const user = req.user
    if (!user) {
      return res.status(400).json({ message: 'User not authenticated' })
    }
    try {
      const result = await this.rideService.getDriverRides(user.firebaseId)
      successResponse(res, 200, 'Rides fetched successfully', result)
    } catch (error) {
      errorLogger('Error fetching rides', error)
      errorResponse(res, 500, 'Failed to fetch rides', error)
    }
  }

  updateRideStatus = async (req: Request, res: Response) => {
    const user = req.user
    const { id, status } = req.body
    try {
      const result = await this.rideService.updateRideStatus(
        user.firebaseId,
        id,
        status,
      )
      successResponse(res, 200, 'Ride status updated successfully', result)
    } catch (error) {
      errorLogger('Error updating ride status', error)
      errorResponse(res, 500, 'Failed to update ride status', error)
    }
  }
}
