import { prisma, Ride, RideStatus } from '@rider/db'
import { DatabaseError, errorLogger } from '@rider/shared/dist'

export class RideRepository {
  // Placeholder for ride-related database operations

  findLiveRideById = async (driverId: string): Promise<Ride[]> => {
    try {
      const result = await prisma.ride.findMany({
        where: { driverId, status: 'ONGOING' as RideStatus },
      })
      return result
    } catch (error) {
      errorLogger('Error fetching live rides', error)
      throw new DatabaseError('Failed to fetch live rides')
    }
  }

  findDriverRides = async (driverId: string): Promise<Ride[]> => {
    try {
      const result = await prisma.ride.findMany({
        where: { driverId, status: { not: 'REJECTED' } },
      })
      return result
    } catch (error) {
      errorLogger('Error fetching rides', error)
      throw new DatabaseError('Failed to fetch rides')
    }
  }

  updateRideStatus = async (
    userId: string,
    rideId: number,
    status: string,
  ): Promise<Ride> => {
    try {
      const result = await prisma.ride.update({
        where: { driverId: userId, id: rideId },
        data: { status: status as RideStatus },
      })
      return result
    } catch (error) {
      errorLogger('Error updating ride status', error)
      throw new DatabaseError('Failed to update ride status')
    }
  }
}
