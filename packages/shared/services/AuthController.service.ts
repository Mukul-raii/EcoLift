import { DecodedIdToken } from 'firebase-admin/auth'
import {
  AuthenticationError,
  DatabaseError,
  ServerError,
  ValidationError,
} from '../errors/auth.error'
import { AUTH_ERRORS, ROLE_MAPPINGS } from '../constants/auth.constant'
import { UserRepository } from '../repositories/user.repository'
import { auth } from '../utils/firebase'
import { Role } from '@rider/db'
import { User } from '../Types/userTypes'
import jwt from 'jsonwebtoken'
import { errorLogger, logger } from '../utils/respose'

export class AuthenticationService {
  private userRepository: UserRepository

  constructor() {
    this.userRepository = new UserRepository()
  }
  async authentication(
    idToken: string,
    requestPath: keyof typeof ROLE_MAPPINGS,
  ) {
    this.validateInput(idToken, requestPath)
    try {
      // verify id token
      const verifiedUser = await this.verifyFirebaseIdToken(idToken)
      //check user exist
      let userRecord
      userRecord = await this.userExist(verifiedUser.uid)
      //create user
      if (!userRecord) {
        userRecord = await this.createUser(
          verifiedUser,
          ROLE_MAPPINGS[requestPath],
        )
      }
      //updatelast login
      await this.updateLastLogin(userRecord)
      //generate jwt auth token
      const token = this.generateJWT_AuthToken(userRecord)
      return {
        token,
        userRecord,
      }
      //return
    } catch (error) {
      errorLogger('Error during authentication process', error)
      throw new ServerError('Internal Server Error Authenticating User', error)
    }
  }

  validateInput(idToken: string, requestPath: string): void {
    if (!idToken || idToken.trim() === '') {
      errorLogger('No Id Token Provided')
      throw new AuthenticationError(
        'Valid Id Token is required',
        AUTH_ERRORS.NO_TOKEN,
        400,
      )
    }
    console.log(requestPath)
    if (!(requestPath in ROLE_MAPPINGS)) {
      errorLogger('Invalid Authentication EndPoint')
      throw new ValidationError('Invalid Authentication EndPoint')
    }
  }

  async verifyFirebaseIdToken(idToken: string): Promise<DecodedIdToken> {
    try {
      const decoded = await auth.verifyIdToken(idToken)
      if (!decoded.uid) {
        errorLogger('Invalid Firebase token Error ')
        throw new AuthenticationError(
          'Invalid Firebase token Error ',
          AUTH_ERRORS.FIREBASE_ERROR,
          401,
        )
      }
      return decoded as DecodedIdToken
    } catch (error) {
      errorLogger('Error Verifying Firebase Id Token', error)
      throw new AuthenticationError(
        'Invalid Firebase Id Token',
        AUTH_ERRORS.FIREBASE_ERROR,
        400,
      )
    }
  }

  async userExist(firebaseUid: string): Promise<User | null> {
    logger('Checking if user exists with Firebase UID:', firebaseUid)
    return await this.userRepository.findUserByFirebaseUid(firebaseUid)
  }

  async createUser(
    decodedUser: DecodedIdToken,
    requestPath: string,
  ): Promise<User> {
    try {
      const userRecord = await auth.getUser(decodedUser.uid)
      if (!userRecord.email || !userRecord.uid) {
        errorLogger('Essential user information missing from Firebase')
        throw new DatabaseError('Error while creating new User')
      }
      const user: User = {
        name:
          userRecord.email?.split('@')[0] ||
          userRecord.displayName ||
          'Unknown',
        email: userRecord?.email,
        firebaseUid: userRecord.uid,
        role: requestPath as Role,
        phone: userRecord.phoneNumber ?? undefined,
        lastLogin: new Date(),
      }
      return await this.userRepository.createUser(user)
    } catch (error) {
      errorLogger('Error Creating New User', error)
      throw new DatabaseError('Failed to create a user', error)
    }
  }

  async updateLastLogin(user: User): Promise<void> {
    try {
      const updateuser: User = {
        ...user,
        lastLogin: new Date(),
      }
      logger('Updating last login for user:', updateuser)
      await this.userRepository.updateUser(updateuser)
    } catch (error) {
      errorLogger('Error updating last login', error)
      throw new DatabaseError('Failed To update last login', error)
    }
  }
  generateJWT_AuthToken(user: User): string {
    try {
      const secret = process.env.JWT_SECRET

      if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set')
      }
      return jwt.sign(
        {
          ...user,
        },
        secret,
        { expiresIn: '2h' },
      )
    } catch (error) {
      errorLogger('Error signing JWT auth token', error)
      throw new ServerError('Failed to sign JWT auth token', error)
    }
  }
}
