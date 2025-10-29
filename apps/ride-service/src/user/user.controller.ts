import { Request, Response } from 'express'
import { successResponse, logger } from '@rider/shared/dist'
import { userService } from './User.service'

export class userProfile {
  private userService: userService

  constructor() {
    this.userService = new userService()
  }

  getUserProfile = async (req: Request, res: Response): Promise<Response> => {
    const user = req.user
    const result = await this.userService.getUserProfile(user.firebaseUid)
    logger('Profile fetched:', result)
    return successResponse(res, 200, 'Profile Fetched Successfull', result)
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
    logger('Profile updated:', result)
    return successResponse(res, 200, 'Profile Updated Successfully', result)
  }
}
