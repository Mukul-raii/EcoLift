import { Request, Response } from 'express'
import { DriverService } from '../services/driver.service'
import { errorLogger, errorResponse, ServerError } from '@rider/shared/dist'

export class driverProfileController {
  private driverService: DriverService
  constructor() {
    this.driverService = new DriverService()
  }
  // get driver profile
  fetchDriverProfile = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const user = req.user
    try {
      const result = await this.driverService.fetchDriverProfile(
        user.firebaseUid,
      )
      return res.status(200).json({ profile: result })
    } catch (error) {
      errorLogger('Error in driverProfileController.fetchDriverProfile', error)
      return errorResponse(res, 'Error fetching driver profile', 500, error)
    }
  }
  // change driver status
  changeDriverStatus = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const user = req.user
    const { status } = req.query
    try {
      const result = await this.driverService.changeDriverStatus(
        user.id,
        status as 'active' | 'inactive',
      )
      return res.status(200).json({ message: 'Status updated', result })
    } catch (error) {
      return errorResponse(res, 'Error updating driver status', 500, error)
    }
  }
}
