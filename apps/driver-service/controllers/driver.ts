import { Request, Response } from 'express'
import { getUserProfile, updateStatus } from '../services/driver'

export const userProfile = async (req: Request, res: Response) => {
  const user = req.user
  if (!user) {
    return res.status(400).json({ message: 'User not authenticated' })
  }
  try {
    const profile = await getUserProfile(user.firebaseUid)
    return res.status(200).json({ profile })
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error fetching user profile', error })
  }
}

export const updateDriverStatus = async (req: Request, res: Response) => {
  const user = req.user
  const { status } = req.query
  if (!user) {
    return res.status(400).json({ message: 'User not authenticated' })
  }
  if (!status || (status !== 'active' && status !== 'inactive')) {
    return res.status(400).json({ message: 'Invalid status value' })
  }
  try {
    const result = await updateStatus(user.id, status as 'active' | 'inactive')
    return res.status(200).json({ message: 'Status updated', result })
  } catch (error) {
    return res.status(500).json({ message: 'Error updating status', error })
  }
}
