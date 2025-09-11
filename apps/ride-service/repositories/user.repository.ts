import { prisma, User } from '@rider/db'
import { DatabaseError, errorLogger, logger } from '@rider/shared/dist'

export class UserRepository {
  async getUserProfile(userId: string): Promise<User | null> {
    try {
      const result = await prisma.user.findUnique({
        where: { firebaseUid: userId },
      })
      return result
    } catch (error) {
      errorLogger('Error fetching user profile', { error })
      throw new DatabaseError('Error fetching user profile', error)
    }
  }
}
