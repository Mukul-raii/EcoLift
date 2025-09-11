import { prisma, Prisma } from '@rider/db'
import { User } from '../Types/userTypes'
import { DatabaseError } from '../errors/auth.error'
import { errorLogger } from '../utils/respose'

export class UserRepository {
  // do we need a constructor here?

  //User exists function -
  async findUserByFirebaseUid(uid: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { firebaseUid: uid },
      })
      return user
    } catch (error) {
      errorLogger(`Error finding user with Firebase Uid: ${uid}`, error)
      throw new DatabaseError(
        `Failed to find user with Firebase Uid: ${uid}`,
        error,
      )
    }
  }

  // Create user function -
  async createUser(user: User) {
    try {
      const res = await prisma.user.create({
        data: { ...user, lastLogin: new Date() },
      })
      return res
    } catch (error) {
      errorLogger(`Error creating user : ${user.email}`, error)
      throw new DatabaseError(`Failed to create user : ${user.email}`, error)
    }
  }

  //update user details
  async updateUser(user: User) {
    try {
      const res = await prisma.user.update({
        where: {
          firebaseUid: user.firebaseUid,
        },
        data: {
          name: user?.name,
          phone: user?.phone,
          lastLogin: user?.lastLogin,
        },
      })
    } catch (error) {
      errorLogger(`Error updating User Details: ${user.email}`, error)
      throw new DatabaseError(
        `Failed to update User Details:${user.email}`,
        error,
      )
    }
  }
}
