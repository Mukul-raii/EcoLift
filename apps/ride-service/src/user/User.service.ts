import { prisma, User } from '@rider/db'
import { errorLogger, errorResponse, ServerError } from '@rider/shared/dist'
import { UserRepository } from './user.repository'
import { ServiceError } from '@rider/shared/index'

export class userService {
  //Private property to hold instance of UserRepository
  private userRepositoty: UserRepository

  //Constructor for getting instance of UserRepository
  constructor() {
    this.userRepositoty = new UserRepository()
  }

  async getUserProfile(userId: string): Promise<User | null> {
    try {
      const user = await this.userRepositoty.getUserProfile(userId)
      return user
    } catch (error) {
      errorLogger('Error fetching user profile', { error })
      throw new ServiceError(
        'Error fetching user profile',
        'getUserProfile',
        error,
      )
    }
  }

  async updateUserProfile(
    userId: string,
    updateData: Partial<User>,
  ): Promise<User | null> {
    try {
      const updatedUser = await this.userRepositoty.updateUserProfile(
        userId,
        updateData,
      )
      return updatedUser
    } catch (error) {
      errorLogger('Error updating user profile', { error })
      throw new ServiceError(
        'Error updating user profile',
        'updateUserProfile',
        error,
      )
    }
  }
}
