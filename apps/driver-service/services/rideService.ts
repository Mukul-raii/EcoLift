import { prisma } from '@rider/db'

export const getDriverRides = async (driverId: number) => {
  // Placeholder implementation
  return await prisma.ride.findMany({
    where: { driverId },
  })
}
