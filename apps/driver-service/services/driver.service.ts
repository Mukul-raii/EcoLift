import { prisma, User } from '@rider/db'
import { DriverRepository } from '../repositories/driver.repository'
import { errorLogger, logger, ServerError } from '@rider/shared/dist'
import redis from '@rider/shared/dist/services/redis'

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
  async updateDriverLocation(
    userId: number,
    latitude: number,
    longitude: number,
  ) {
    try {
      await redis.geoadd(
        'driver:location',
        longitude,
        latitude,
        userId.toString(),
      )
      await redis.hset(
        'driver:last_update',
        userId.toString(),
        Date.now().toString(),
      )
      logger('Driver location updated successfully')
    } catch (error) {
      errorLogger('Error in DriverService.updateDriverLocation', error)
      throw new ServerError('Error updating driver location', error)
    }
  }

  async fetchDriverLocation(userId: number) {
    try {
      const [[longitude, latitude]] = await redis.geopos(
        'driver:location',
        userId.toString(),
      )
      const lastUpdated = await redis.hget(
        'driver:last_update',
        userId.toString(),
      )

      if (!longitude || !latitude) {
        throw new ServerError(`No location found for driver ${userId}`)
      }

      return {
        userId,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        lastUpdated: lastUpdated ? new Date(Number(lastUpdated)) : null,
      }
    } catch (error) {
      errorLogger('Error in DriverService.fetchDriverLocation', error)
      throw new ServerError('Error fetching driver location', error)
    }
  }
}
