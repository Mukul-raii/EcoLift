import { DriverStatus, prisma, Ride, RideStatus } from '@rider/db'
import { DatabaseError, errorLogger, logger } from '@rider/shared/dist'

import { RideForm } from '@rider/shared/dist'
import { resUser, User } from '@rider/shared/dist'

export class RideRepository {
  // Ride repository methods would go here
  async createRide(rideData: RideForm, userId: string): Promise<Ride> {
    // Logic to create a ride in the database
    try {
      return await prisma.ride.create({
        data: {
          fromLocation: rideData.from_address,
          toLocation: rideData.to_address,
          status: 'PENDING',
          pickUpLat: Number(rideData?.from_lat),
          pickUpLong: Number(rideData?.from_lng),
          dropOffLat: Number(rideData?.to_lat),
          dropOffLong: Number(rideData?.to_lng),
          riderId: userId,
        },
      })
    } catch (error) {
      logger('Error creating ride:', error)
      throw new DatabaseError('Error creating ride', error)
    }
  }
  //Get ride by userId
  async getRideByUserId(userId: string): Promise<Ride | null> {
    try {
      return await prisma.ride.findFirst({
        where: {
          riderId: userId,
          status: {
            in: [
              'PENDING',
              'REQUESTED',
              'ACCEPTED',
              'STARTED',
              'ASSIGNED',
              'IN_PROGRESS',
              'REJECTED',
            ],
          },
        },
      })
    } catch (error) {
      logger('Error fetching ride by ID:', error)
      throw new DatabaseError('Error fetching ride by ID', error)
    }
  }

  async getRides(user: resUser) {
    try {
      return await prisma.ride.findMany({
        where: {
          riderId: user.firebaseUid,
        },
      })
    } catch (error) {
      logger('Error fetching rides:', error)
      throw new DatabaseError('Error fetching rides', error)
    }
  }
  //get id with rideData
  async findRide(rideData: Partial<Ride>): Promise<Ride | null> {
    try {
      return await prisma.ride.findFirst({
        where: {
          id: rideData.id,
          riderId: rideData.riderId,
        },
      })
    } catch (error) {
      logger('Error fetching ride by data:', error)
      throw new DatabaseError('Error fetching ride by data', error)
    }
  }

  //get id with rideData
  async getRideById(rideId: number, user: User): Promise<Ride | null> {
    try {
      return await prisma.ride.findFirst({
        where: {
          id: rideId,
          riderId: user.firebaseUid,
        },
      })
    } catch (error) {
      logger('Error fetching ride by data:', error)
      throw new DatabaseError('Error fetching ride by data', error)
    }
  }

  async findAvailableDriver() {
    // Mock function to find an available driver
    try {
      const res = await prisma.driverProfile.findFirst({
        where: {
          status: 'AVAILABLE',
        },
      })
      return res
    } catch (error) {
      errorLogger('Error finding available driver:', error)
      throw new DatabaseError('Error finding available driver', error)
    }
  }

  async updateRide(updateData: Partial<Ride>): Promise<Ride> {
    try {
      console.log('updateing ride,,,,,', updateData)
      const result = await prisma.ride.update({
        where: { id: updateData.id },
        data: updateData,
      })
      return result
    } catch (error) {
      errorLogger('Error updating ride:', error)
      throw new DatabaseError('Error updating ride', error)
    }
  }

  async updateRideAndDriver(updateData: Partial<Ride>) {
    try {
      const otp = String(Math.floor(100000 + Math.random() * 900000))

      const result = await prisma.$transaction(async (tx) => {
        const updatedDriver = await tx.driverProfile.update({
          where: { userId: updateData.driverId!, status: 'AVAILABLE' },
          data: { status: DriverStatus.UNAVAILABLE },
        })
        if (!updatedDriver) return null

        const rideUpdate = await tx.ride.update({
          where: { id: updateData.id },
          data: {
            status: RideStatus.IN_PROGRESS,
            driverId: updateData.driverId,
            otp: otp,
          },
        })

        console.log('Driver and ride status updated:', {
          updatedDriver,
          rideUpdate,
        })
        return rideUpdate
      })

      console.log('✅ Transaction committed with:', result)

      return result
    } catch (error) {
      errorLogger('Error updating driver status:', error)
      throw new DatabaseError('Error updating driver status', error)
    }
  }

  async verifyOTP(rideData: Partial<Ride>, otp: number) {
    try {
      console.log('OTP Verification Started', rideData)
      const isVerified = await prisma.ride.findUnique({
        where: {
          id: rideData.id,
          otp: rideData.otp,
        },
      })
      return isVerified
    } catch (error) {
      errorLogger('Error verifying OTP:', error)
      throw new DatabaseError('Error verifying OTP', error)
    }
  }
}
