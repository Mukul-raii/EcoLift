import { prisma } from '@rider/db'

export const startRide = async (
  pickupLat: number,
  pickupLong: number,
  dropoffLat: number,
  dropoffLong: number,
  userId: number,
) => {
  // Simulate ride finding logic
  return await prisma.ride.create({
    data: {
      pickUpLat: pickupLat,
      pickUpLong: pickupLong,
      dropOffLat: dropoffLat,
      dropOffLong: dropoffLong,
      riderId: userId,
    },
  })
}
