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
      return errorResponse(res, 500, 'Error fetching driver profile', error)
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
      return errorResponse(res, 500, 'Error updating driver status', error)
    }
  }

  updateDriverProfile = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const user = req.user
    const updateData = req.body
    try {
      const result = await this.driverService.updateDriverProfile(
        user.firebaseUid,
        updateData,
      )
      return res.status(200).json({ message: 'Profile updated', result })
    } catch (error) {
      errorLogger('Error in driverProfileController.updateDriverProfile', error)
      return errorResponse(res, 500, 'Error updating driver profile', error)
    }
  }

  updateDriverLocation = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const user = req.user
    const { location } = req.body
    const body = req.body
    try {
      const result = await this.driverService.updateDriverLocation(
        user.firebaseUid,
        location.latitude,
        location.longitude,
      )
      return res.status(204).json({ message: 'Location updated' })
    } catch (error) {
      errorLogger(
        'Error in driverProfileController.updateDriverLocation',
        error,
      )
      return errorResponse(res, 500, 'Error updating driver location', error)
    }
  }
  fetchDriverLocation = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const user = req.user
    try {
      const result = await this.driverService.fetchDriverLocation(user.id)
      return res.status(200).json({ message: 'Location fetched', result })
    } catch (error) {
      errorLogger('Error in driverProfileController.fetchDriverLocation', error)
      return errorResponse(res, 500, 'Error fetching driver location', error)
    }
  }
}
