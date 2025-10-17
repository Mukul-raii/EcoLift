import { Request, Response } from 'express'
import { RideService, startRide } from './ride.service'
import {
  errorLogger,
  logger,
  ServerError,
  successResponse,
} from '@rider/shared/dist'
import { RideQueue } from './ride.queue'

export class RideController {
  private rideService: RideService
  private rideQueue: RideQueue
  constructor() {
    this.rideService = new RideService()
    this.rideQueue = new RideQueue()
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

  getRides = async (req: Request, res: Response): Promise<Response> => {
    const user = req.user
    try {
      const result = await this.rideService.getRides(user)
      logger('Rides fetched successfully:', result)
      return successResponse(res, 200, 'Rides fetched successfully', result)
    } catch (error) {
      errorLogger('Error fetching rides:', error)
      throw new ServerError('Error fetching live rides', error)
    }
  }

  fetchLiveRides = async (req: Request, res: Response): Promise<Response> => {
    const user = req.user
    try {
      console.log('fetchLiveRides called with rideId:')
      const result = await this.rideService.fetchLiveRides(user)
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

  requestRide = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { rideData } = req.body
      console.log('ride addding into ride queue :', rideData)
      const ride = await this.rideQueue.rideRequest(rideData)
      console.log('ride added into ride queue :', rideData)
      return successResponse(res, 200, 'Live rides fetched successfully', {})
    } catch (error) {
      errorLogger('Error fetching live rides:', error)
      throw new ServerError('Error fetching live rides', error)
    }
  }

  acceptRide = async (req: Request, res: Response): Promise<Response> => {
    try {
      console.log('acceptRide called with rideId:')
      const { ridedata } = req.body
      const ride = await this.rideQueue.rideAccept(ridedata)
      return successResponse(res, 200, 'Live rides fetched successfully', {})
    } catch (error) {
      errorLogger('Error fetching live rides:', error)
      throw new ServerError('Error fetching live rides', error)
    }
  }

  rejectRide = async (req: Request, res: Response): Promise<Response> => {
    try {
      console.log('rejectRide called with rideId:')
      const { ridedata } = req.body
      const ride = await this.rideQueue.rideReject(ridedata)
      return successResponse(res, 200, 'Live rides fetched successfully', {})
    } catch (error) {
      errorLogger('Error fetching live rides:', error)
      throw new ServerError('Error fetching live rides', error)
    }
  }
}
