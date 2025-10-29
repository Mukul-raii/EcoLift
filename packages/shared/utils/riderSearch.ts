import { prisma, DriverProfile } from '@rider/db'

/**
 * Find the first available driver in the system
 * @returns DriverProfile if found, null otherwise
 */
export const findAvailableDriver = async (): Promise<DriverProfile | null> => {
  const driver = await prisma.driverProfile.findFirst({
    where: {
      status: 'AVAILABLE',
    },
  })
  return driver
}

