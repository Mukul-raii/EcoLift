import { Request, Response } from 'express'
import { startRide } from '../services/ride'

export const findRide = async (req: Request, res: Response) => {
  const user = req.user
  if (!user) {
    return res.status(400).json({ message: 'User not authenticated' })
  }
  const { pickupLat, pickupLong, dropoffLat, dropoffLong } = req.body
  if (!pickupLat || !dropoffLat || !pickupLong || !dropoffLong) {
    return res
      .status(400)
      .json({ message: 'Pickup and dropoff locations are required' })
  }
  try {
    const ride = await startRide(
      pickupLat,
      pickupLong,
      dropoffLat,
      dropoffLong,
      user.id,
    )
  } catch (error) {}
}
