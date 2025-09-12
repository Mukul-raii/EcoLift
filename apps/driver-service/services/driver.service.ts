import { prisma, User } from '@rider/db'
import { DriverRepository } from '../repositories/driver.repository'
import { errorLogger, logger, ServerError } from '@rider/shared/dist'

export class DriverService {
  private driverRepository: DriverRepository
  constructor() {
    this.driverRepository = new DriverRepository()
  }

  async fetchDriverProfile(firebaseUid: string) {
    try {
      const result = this.driverRepository.getUserProfile(firebaseUid)
      return result
    } catch (error) {
      errorLogger('Error in DriverService.fetchDriverProfile', error)
      throw new ServerError('Error fetching driver profile', error)
    }
  }

  async changeDriverStatus(userId: number, status: 'active' | 'inactive') {
    try {
      const result = this.driverRepository.updateDriverStatus(userId, status)
      return result
    } catch (error) {
      errorLogger('Error in DriverService.changeDriverStatus', error)
      throw new ServerError('Error updating driver status', error)
    }
  }

  async updateDriverProfile(
    firebaseUid: string,
    updateData: Partial<User>,
  ): Promise<User | null> {
    try {
      const result = await this.driverRepository.updateDriverProfile(
        firebaseUid,
        updateData,
      )
      return result
    } catch (error) {
      errorLogger('Error in DriverService.updateDriverProfile', error)
      throw new ServerError('Error updating driver profile', error)
    }
  }
}
