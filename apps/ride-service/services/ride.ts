import { prisma } from '@rider/db'

export const startRide = async (
  from: string,
  to: string,
  pickupLat: number,
  pickupLong: number,
  dropoffLat: number,
  dropoffLong: number,
  userId: string,
) => {
  // Simulate ride finding logic
  try {
    return await prisma.ride.create({
      data: {
        fromLocation: from,
        toLocation: to,
        status: 'REQUESTED',
        pickUpLat: pickupLat,
        pickUpLong: pickupLong,
        dropOffLat: dropoffLat,
        dropOffLong: dropoffLong,
        riderId: userId,
      },
    })
  } catch (error) {
    console.error('Error creating ride:', error)
    throw new Error('Error creating ride')
  }
}
