import { DriverStatus, prisma, Ride } from '@rider/db'
import {
  DatabaseError,
  errorLogger,
  errorResponse,
  logger,
  findAvailableDriver,
} from '@rider/shared'

export class RideRepository {
  async findRide(rideData: Partial<Ride>) {
    try {
      logger('createRide', rideData)
      const result = await prisma.ride.findFirst({
        where: {
          id: rideData.id,
          riderId: rideData?.riderId,
          driverId: rideData?.driverId,
        },
      })
      return result
    } catch (error) {
      errorLogger('Error creating ride:', error)
      throw new DatabaseError('Error creating ride', { error, rideData })
    }
  }

  async findAvailableDriver() {
    // Use shared utility function
    try {
      const res = await findAvailableDriver()
      return res
    } catch (error) {
      errorLogger('Error finding available driver:', error)
      throw new DatabaseError('Error finding available driver', error)
    }
  }
  async updateRide(updateData: Partial<Ride>) {
    try {
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
  async removeDriverFromRide(rideData: Partial<Ride>) {
    try {
      const result = await prisma.ride.update({
        where: { id: rideData.id, driverId: rideData.driverId },
        data: { driverId: null, status: 'PENDING' },
      })
      return result
    } catch (error) {
      errorLogger('Error removing driver from ride:', error)
      throw new DatabaseError('Error removing driver from ride', error)
    }
  }
  async updateRideAndDriver(
    updateData: Partial<Ride>,
    driverId: string,
    status: DriverStatus,
  ) {
    try {
      const result = await prisma.$transaction(async (tx) => {
        const updatedDriver = await tx.driverProfile.updateMany({
          where: { userId: driverId, status: 'AVAILABLE' },
          data: { status: status as DriverStatus },
        })
        if (updatedDriver.count === 0) return null
        const rideUpdate = await tx.ride.update({
          where: { id: updateData.id },
          data: { status: updateData.status, driverId: updateData.driverId },
        })
        return rideUpdate
      })
      return result
    } catch (error) {
      errorLogger('Error updating driver status:', error)
      throw new DatabaseError('Error updating driver status', error)
    }
  }
}
