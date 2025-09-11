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
    return successResponse(res, result, 'Profile Fetched Successfull', 200)
  }
}
