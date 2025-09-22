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

    console.log('findRide called with data:', data)
    try {
      const result = await this.rideService.startRide(user, data)
      logger('Ride started successfully:', result)
      return successResponse(res, 200, 'Ride started successfully', result)
    } catch (error) {
      errorLogger('Error starting ride:', error)
      throw new ServerError('Error starting ride', error)
    }
  }

  fetchLiveRides = async (req: Request, res: Response): Promise<Response> => {
    const user = req.user
    const { rideId } = req.params
    try {
      console.log('fetchLiveRides called with rideId:', rideId)
      const result = await this.rideService.fetchLiveRides(user, Number(rideId))
      logger('Live rides fetched successfully:', result)
      return successResponse(
        res,
        200,
        'Live rides fetched successfully',
        result,
      )
    } catch (error) {
      errorLogger('Error fetching live rides:', error)
      throw new ServerError('Error fetching live rides', error)
    }
  }
}
