import { prisma, DriverProfile } from '@rider/db'

/**
 * Find the first available driver in the system
 * Drivers are ordered by creation date to ensure fair distribution
 * @returns DriverProfile if found, null otherwise
 */
export const findAvailableDriver = async (): Promise<DriverProfile | null> => {
  const driver = await prisma.driverProfile.findFirst({
    where: {
      status: 'AVAILABLE',
    },
    orderBy: {
      id: 'asc', // Fair driver selection based on signup order
    },
  })
  return driver
}

