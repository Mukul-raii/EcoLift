import { prisma, User } from '@rider/db'
import { errorLogger, errorResponse, ServerError } from '@rider/shared/dist'
import { UserRepository } from '../repositories/user.repository'

export class userService {
  private userRepositoty: UserRepository
  constructor() {
    this.userRepositoty = new UserRepository()
  }
  async getUserProfile(userId: string): Promise<User | null> {
    try {
      const user = await this.userRepositoty.getUserProfile(userId)
      return user
    } catch (error) {
      errorLogger('Error fetching user profile', { error })
      throw new ServerError('Error fetching user profile', error)
    }
  }
}
