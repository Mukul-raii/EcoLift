import { prisma } from '@rider/db'
import {
  AuthenticationError,
  errorLogger,
  ServerError,
} from '@rider/shared/dist'
import { AUTH_ERRORS } from '@rider/shared/dist/constants/auth.constant'
import { resUser } from '@rider/shared/dist/Types/userTypes'
import { RideRepository } from '../repositories/ride.repository'

export const startRide = async (
  from: string,
  to: string,
  pickupLat: number,
  pickupLong: number,
  dropoffLat: number,
  dropoffLong: number,
  userId: string,
) => {
  // Simulate ride finding logic
  try {
    return await prisma.ride.create({
      data: {
        fromLocation: from,
        toLocation: to,
        status: 'REQUESTED',
        pickUpLat: pickupLat,
        pickUpLong: pickupLong,
        dropOffLat: dropoffLat,
        dropOffLong: dropoffLong,
        riderId: userId,
      },
    })
  } catch (error) {
    console.error('Error creating ride:', error)
    throw new Error('Error creating ride')
  }
}

interface startRide {
  from: string
  to: string
  pickupLat: number
  pickupLong: number
  dropoffLat: number
  dropoffLong: number
}

export class RideService {
  private rideRepository: RideRepository

  constructor() {
    this.rideRepository = new RideRepository()
  }

  async startRide(user: resUser, data: startRide) {
    //validate data
    try {
      await this.validateData(user, data)

      const ride = await this.rideRepository.createRide(data, user.firebaseUid)

      return ride
    } catch (error) {
      throw new ServerError('Error starting ride', error)
    }
  }

  async validateData(user: resUser, data: startRide) {
    if (!user || user.role !== 'RIDER') {
      errorLogger('User not authenticated or not a rider')
      throw new AuthenticationError(
        'User not authenticated or not a rider',
        AUTH_ERRORS.USER_NOT_FOUND,
        401,
      )
    }
    if (!data.from || !data.to) {
      errorLogger('Pickup and dropoff locations are required')
      throw new Error('Pickup and dropoff locations are required')
    }
  }
}
