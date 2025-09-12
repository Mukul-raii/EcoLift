import { Request, Response } from 'express'
import { getUserProfile, userService } from '../services/User.service'
import { successResponse } from '@rider/shared/dist'

export class userProfile {
  private userService: userService

  constructor() {
    this.userService = new userService()
  }
  getUserProfile = async (req: Request, res: Response): Promise<Response> => {
    const user = req.user

    const result = await this.userService.getUserProfile(user.firebaseUid)
    console.log('Profile fetched:', result)
    return successResponse(res, result, 'Profile Fetched Successfull', 200)
  }

  updateUserProfile = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const user = req.user
    const updateData = req.body
    const result = await this.userService.updateUserProfile(
      user.firebaseUid,
      updateData,
    )
    console.log('Profile updated:', result)
    return successResponse(res, result, 'Profile Updated Successfully', 200)
  }
}
