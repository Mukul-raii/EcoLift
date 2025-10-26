import { prisma, Ride, RideStatus } from '@rider/db'
import {
  AuthenticationError,
  DriverType,
  errorLogger,
  RideFormData,
  ServerError,
} from '@rider/shared/dist'
import { AUTH_ERRORS } from '@rider/shared/dist/constants/auth.constant'
import { resUser, User } from '@rider/shared/dist/types/user.type'
import { RideRepository } from './ride.repository'
import { RideQueue } from './ride.queue'
import axios from 'axios'
import { RideForm } from '@rider/shared/dist'
import { tryCatch } from 'bullmq'
import { NotificationService } from '../notification/notification.service'
import { NotificationQueue } from '../notification/notification.queue'
import redis from '@rider/shared/dist/services/redis'

// export const startRide = async (
//   from: string,
//   to: string,
//   pickupLat: number,
//   pickupLong: number,
//   dropoffLat: number,
//   dropoffLong: number,
//   userId: string,
// ) => {
//   // Simulate ride finding logic
//   try {
//     return await prisma.ride.create({
//       data: {
//         fromLocation: from,
//         toLocation: to,
//         status: 'REQUESTED',
//         pickUpLat: pickupLat,
//         pickUpLong: pickupLong,
//         dropOffLat: dropoffLat,
//         dropOffLong: dropoffLong,
//         riderId: userId,
//       },
//     })
//   } catch (error) {
//     console.error('Error creating ride:', error)
//     throw new Error('Error creating ride')
//   }
// }

export class RideService {
  private rideRepository: RideRepository
  private rideQueue: RideQueue
  private notificationQueue: NotificationQueue

  constructor() {
    this.rideRepository = new RideRepository()
    this.rideQueue = new RideQueue()
    this.notificationQueue = new NotificationQueue()
  }

  async startRide(user: resUser, data: RideForm) {
    //validate data
    try {
      console.log('Starting ride with data:', 'for user:', data)
      await this.validateStartRideData(user, data)
      console.log('validated')

      const ride: Ride = await this.rideRepository.createRide(
        data,
        user.firebaseUid,
      )
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
      const ride: Ride | null = await this.rideRepository.getRideByUserId(
        user.firebaseUid,
      )
      console.log('Ride fetched:', ride)
      return ride
    } catch (error) {
      throw new ServerError('Error fetching live rides', error)
    }
  }

  async getRides(user: resUser) {
    try {
      const rides: Ride[] = await this.rideRepository.getRides(user)
      return rides
    } catch (error) {
      throw new ServerError('Error fetching rides', error)
    }
  }

  async validateStartRideData(user: resUser, data: RideForm) {
    if (!user || user.role !== 'RIDER') {
      errorLogger('User not authenticated or not a rider')
      throw new AuthenticationError(
        'User not authenticated or not a rider',
        AUTH_ERRORS.USER_NOT_FOUND,
        401,
      )
    }
    if (!data.from_address || !data.to_address) {
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
      const ride: Ride | null = await this.rideRepository.findRide(rideData)
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
    const result: DriverType | null =
      await this.rideRepository.findAvailableDriver()
    // No driver available
    if (!result) {
      return null
    }
    return result
  }

  async updateRide(rideData: Ride): Promise<Ride> {
    try {
      const updateRide: Ride = await this.rideRepository.updateRide(rideData)
      return updateRide
    } catch (error) {
      throw new ServerError('Error updating ride', error)
    }
  }

  async updateRideAndDriver(updateData: Partial<Ride>) {
    try {
      const updateRide: Ride | null =
        await this.rideRepository.updateRideAndDriver(updateData)
      return updateRide
    } catch (error) {
      throw new ServerError('Error updating ride', error)
    }
  }

  async ridePrepared(rideData: RideFormData) {
    try {
      //find the distance between the distance
      const response = await this.getDistaceForRide(
        rideData.from_lat,
        rideData.from_lng,
        rideData.to_lat,
        rideData.to_lng,
      )

      const { distance, duration } = response
      const estimatedprices = await this.calculatePrice(distance)

      //calculate the price
      return { distance, duration, estimatedprices }
    } catch (error) {
      throw new ServerError('Error creating ride', error)
    }
  }

  async getDistaceForRide(
    startLat: number,
    startLong: number,
    endLat: number,
    endLong: number,
  ) {
    try {
      const ORS_API_KEY =
        'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImVhNTc1NjkzOGYwYzRlOGFiYjRkNDBiYTcyZjYzMDgxIiwiaCI6Im11cm11cjY0In0='
      const baseURL = `https://api.openrouteservice.org/v2/directions/driving-car`
      const response = await axios.get(baseURL, {
        params: {
          api_key: ORS_API_KEY,
          start: `${startLong},${startLat}`,
          end: `${endLong},${endLat}`,
        },
      })
      if (response.data && response.data.features?.length > 0) {
        // 4. FIX: Parse the response and set the state
        var distance = response.data.features[0].properties.summary.distance
        var duration = response.data.features[0].properties.summary.duration
        return { distance, duration }
      }

      return { distance, duration }
    } catch (error) {
      console.error(error)
      throw new ServerError('Error creating ride', error)
    }
  }

  async calculatePrice(distance: number) {
    const price = distance * 0.02
    return price
  }

  async verifyOTP(rideData: Partial<Ride>, otp: number) {
    try {
      console.log('OTP verification started', rideData, otp)
      const isVerified = await this.rideRepository.verifyOTP(rideData, otp)
      if (!isVerified) {
        throw new Error('Invalid OTP')
      }
      const ride = await this.rideRepository.findRide(rideData)
      if (!ride) {
        throw new Error('Ride not found after otp verification')
      }
      ride.status = RideStatus.STARTED
      const res = await this.rideRepository.updateRide(ride)
      //if otp is valid, update the ride status to 'confirmed'

      //now update rider and driver that your ride is started
      const notification = await this.notificationQueue.sendNotification(
        ride.riderId,
        ride.driverId!,
        'rideRequested',
        ride,
      )

      return ride
    } catch (error) {
      console.error(error)
      throw new ServerError('Error creating ride', error)
    }
  }

  async getDriverLocation(driverId: string) {
    try {
      const [[longitude, latitude]] = await redis.geopos(
        'driver:location',
        driverId.toString(),
      )
      return { longitude, latitude, driverId }
    } catch (error) {
      console.error(error)
      throw new ServerError('Error getting driver location', error)
    }
  }
}
