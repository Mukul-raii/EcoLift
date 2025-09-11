import { Request, Response } from 'express'
import { getDriverRides } from '../services/rideService'

export const driverRides = async (req: Request, res: Response) => {
  const user = req.user
  if (!user) {
    return res.status(400).json({ message: 'User not authenticated' })
  }
  try {
    const result = await getDriverRides(user.id)
    return res.status(200).json({ message: 'Status updated', result })
  } catch (error) {
    return res.status(500).json({ message: 'Error updating status', error })
  }
}
