import { Request, Response } from 'express'
import { startRide } from '../services/ride'

export const findRide = async (req: Request, res: Response) => {
  const user = req.user
  if (!user) {
    return res.status(400).json({ message: 'User not authenticated' })
  }
  const { from, to, pickupLat, pickupLong, dropoffLat, dropoffLong } = req.body

  if (!from || !to) {
    return res
      .status(400)
      .json({ message: 'Pickup and dropoff locations are required' })
  }
  try {
    const ride = await startRide(
      from,
      to,
      pickupLat,
      pickupLong,
      dropoffLat,
      dropoffLong,
      user.userId,
    )
    return res.status(200).json({ Status: 'Ride searching', ride })
  } catch (error) {
    return res.status(500).json({ message: 'Error starting ride', error })
  }
}
