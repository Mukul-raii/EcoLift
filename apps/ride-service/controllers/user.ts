import { Request, Response } from 'express'
import { getUserProfile } from '../services/User'

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
