import { prisma } from '@rider/db'

export const findAvailableDriver = async (rideRequest: any) => {
  // Mock function to find an available driver

  const res = await prisma.driverProfile.findFirst({
    where: {
      status: 'AVAILABLE',
    },
  })
  return res
}

/* export const updateDriverStatus = async (driverId: string, status: string) => {
  await prisma.driverProfile.update({
    where: { userId: driverId },
    data: { status },
  })
} */
