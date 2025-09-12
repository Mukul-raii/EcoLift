import { prisma, Ride } from '@rider/db'
import { DatabaseError, errorLogger } from '@rider/shared/dist'

export class RideRepository {
  // Placeholder for ride-related database operations

  async findLiveRideById(driverId: string): Promise<Ride[]> {
    try {
      const result = await prisma.ride.findMany({
        where: { driverId, status: 'ONGOING' },
      })
      return result
    } catch (error) {
      errorLogger('Error fetching live rides', error)
      throw new DatabaseError('Failed to fetch live rides')
    }
  }

  async findDriverRides(driverId: string): Promise<Ride[]> {
    try {
      const result = await prisma.ride.findMany({
        where: { driverId },
      })
      return result
    } catch (error) {
      errorLogger('Error fetching rides', error)
      throw new DatabaseError('Failed to fetch rides')
    }
  }
}
