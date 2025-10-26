import { Request, Response } from 'express'
import { RideService, startRide } from './ride.service'
import {
  errorLogger,
  logger,
  Ride,
  RidePrepared,
  ServerError,
  successResponse,
} from '@rider/shared/dist'
import { RideQueue } from './ride.queue'
import { RideForm } from '@rider/shared/dist'
import { RideFormData } from '@rider/shared/dist'

export class RideController {
  private rideService: RideService
  private rideQueue: RideQueue

  constructor() {
    this.rideService = new RideService()
    this.rideQueue = new RideQueue()
  }

  findRide = async (req: Request, res: Response): Promise<Response> => {
    const user = req.user
    const rideData: RideForm = req.body
    console.log('ridedata --------', rideData, req.body)

    try {
      const result: Ride = await this.rideService.startRide(user, rideData)
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
      const result: Ride[] = await this.rideService.getRides(user)
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
      const result: Ride | null = await this.rideService.fetchLiveRides(user)
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
      const { rideData } = req.body as { rideData: Partial<Ride> }

      //Request a ride to the queue
      const ride = await this.rideQueue.rideRequest(rideData)
      console.log('ride added into ride queue :', rideData)
      return successResponse(res, 200, 'Ride requested successfully', {})
    } catch (error) {
      errorLogger('Error fetching live rides:', error)
      throw new ServerError('Error fetching live rides', error)
    }
  }

  acceptRide = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { rideData } = req.body as { rideData: Partial<Ride> }
      const ride = await this.rideQueue.rideAccept(rideData)
      return successResponse(res, 200, 'Ride accepted successfully', {})
    } catch (error) {
      errorLogger('Error fetching live rides:', error)
      throw new ServerError('Error fetching live rides', error)
    }
  }

  rejectRide = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { rideData } = req.body as { rideData: Partial<Ride> }
      const ride = await this.rideQueue.rideReject(rideData)
      return successResponse(res, 200, 'Ride Rejected successfully', {})
    } catch (error) {
      errorLogger('Error fetching live rides:', error)
      throw new ServerError('Error fetching live rides', error)
    }
  }

  getRidePrepared = async (req: Request, res: Response): Promise<Response> => {
    try {
      const user = req.user
      const { rideFormData } = req.body as { rideFormData: RideFormData }
      const ride: RidePrepared =
        await this.rideService.ridePrepared(rideFormData)

      return successResponse(res, 200, 'Live rides fetched successfully', ride)
    } catch (error) {
      errorLogger('Error fetching live rides:', error)
      throw new ServerError('Error fetching live rides', error)
    }
  }
  startRide = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { rideData, otp } = req.body as {
        rideData: Partial<Ride>
        otp: string
      }
      console.log('OTP verification started', rideData, otp, req.body)
      const ride = await this.rideService.verifyOTP(rideData, Number(otp))
      return successResponse(res, 200, 'Ride started successfully', {})
    } catch (error) {
      errorLogger('Error fetching live rides:', error)
      throw new ServerError('Error fetching live rides', error)
    }
  }

  getDriverLocation = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    try {
      const { driverId } = req.params
      const location = await this.rideService.getDriverLocation(driverId)
      return successResponse(
        res,
        200,
        'Driver location fetched successfully',
        location,
      )
    } catch (error) {
      errorLogger('Error fetching driver location:', error)
      throw new ServerError('Error fetching driver location', error)
    }
  }
}
