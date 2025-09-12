import { prisma, User } from '@rider/db'
import { DatabaseError, errorLogger } from '@rider/shared/dist'

export class DriverRepository {
  async getUserProfile(userId: string) {
    // logic to get user profile from database
    try {
      const result = await prisma.user.findUnique({
        where: { firebaseUid: userId },
      })
      return result
    } catch (error) {
      errorLogger('Error fetching driver profile', error)
      throw new DatabaseError('Error fetching driver profile', error)
    }
  }

  async updateDriverStatus(userId: number, status: 'active' | 'inactive') {
    // logic to update driver status in database
    try {
      const result = await prisma.driverProfile.update({
        where: { id: userId },
        data: { status },
      })
      return result
    } catch (error) {
      errorLogger('Error updating driver status', error)
      throw new DatabaseError('Error updating driver status', error)
    }
  }

  async updateDriverProfile(
    firebaseUid: string,
    updateData: Partial<User>,
  ): Promise<User | null> {
    try {
      const updatedUser = await prisma.user.update({
        where: { firebaseUid },
        data: updateData,
      })
      return updatedUser
    } catch (error) {
      errorLogger('Error updating driver profile', error)
      throw new DatabaseError('Error updating driver profile', error)
    }
  }
}
