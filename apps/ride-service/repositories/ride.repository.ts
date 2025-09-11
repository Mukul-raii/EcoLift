import { prisma, Ride } from '@rider/db'
import { DatabaseError, logger } from '@rider/shared/dist'

export class RideRepository {
  // Ride repository methods would go here
  async createRide(rideData: any, userId: string): Promise<Ride> {
    // Logic to create a ride in the database
    try {
      return await prisma.ride.create({
        data: {
          fromLocation: rideData.from,
          toLocation: rideData.to,
          status: 'REQUESTED',
          pickUpLat: rideData?.pickupLat,
          pickUpLong: rideData?.pickupLong,
          dropOffLat: rideData?.dropoffLat,
          dropOffLong: rideData?.dropoffLong,
          riderId: userId,
        },
      })
    } catch (error) {
      logger('Error creating ride:', error)
      throw new DatabaseError('Error creating ride', error)
    }
  }
}
