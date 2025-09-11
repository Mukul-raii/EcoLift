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

  async getRideById(rideId: number, userId: string): Promise<Ride | null> {
    try {
      return await prisma.ride.findUnique({
        where: { id: rideId, riderId: userId },
      })
    } catch (error) {
      logger('Error fetching ride by ID:', error)
      throw new DatabaseError('Error fetching ride by ID', error)
    }
  }
}
