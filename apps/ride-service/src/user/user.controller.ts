import { Request, Response } from 'express'
import { errorResponse, successResponse } from '@rider/shared/dist'
import { userService } from './User.service'
import { tryCatch } from 'bullmq'

export class userProfile {
  private userService: userService

  constructor() {
    this.userService = new userService()
  }

  getUserProfile = async (req: Request, res: Response): Promise<Response> => {
    const user = req.user
    try {
      const result = await this.userService.getUserProfile(user.firebaseUid)
      return successResponse(res, 200, 'Profile Fetched Successfull', result)
    } catch (error) {
      return errorResponse(
        res,
        500,
        '[User Controller]- Internal Server Error',
        error,
      )
    }
  }

  updateUserProfile = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    try {
      const user = req.user
      const updateData = req.body
      const result = await this.userService.updateUserProfile(
        user.firebaseUid,
        updateData,
      )
      return successResponse(res, 200, 'Profile Updated Successfully', result)
    } catch (error) {
      return errorResponse(
        res,
        500,
        '[User Controller]- Internal Server Error',
        error,
      )
    }
  }
}
