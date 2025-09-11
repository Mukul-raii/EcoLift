import { NextFunction, Request, Response } from 'express'
import { prisma, Role } from '@rider/db'
import admin from 'firebase-admin'
import { generateAuthToken, generateIdToken } from '../utils/jwtVerification'
import { NewUser, User } from '../Types/userTypes'
import { error } from 'console'
import { auth } from '../utils/firebase'
import {
  errorResponse,
  responseHandler,
  successResponse,
} from '../utils/respose'
import { AuthenticationService } from '../services/AuthController.service'
import { subscribe } from 'diagnostics_channel'
import { ROLE_MAPPINGS } from '../constants/auth.constant'

export async function authenticate(req: Request, res: Response) {
  const { idToken } = req.body
  const requestPath = req.originalUrl

  if (!idToken) {
    return errorResponse(res, 'No token provided', 400)
  }

  try {
    const decoded = await auth.verifyIdToken(idToken)
    console.log('Decoded ID Token:', decoded)
    let userData = await userExists(decoded.uid)

    if (!userData) {
      const userRecord = await auth.getUser(decoded.uid)
      const newUserData = {
        firebaseUid: userRecord.uid,
        email: userRecord?.email || '',
        name: userRecord.displayName || '',
        phone: userRecord.phoneNumber || '',
        role: roleBasedAccess[
          requestPath as keyof typeof roleBasedAccess
        ] as Role,
      }
      userData = await createUser(newUserData)
    }
    const token = await generateAuthToken({
      userId: userData?.firebaseUid,
      email: userData?.email,
      role: userData?.role,
    })
    console.log('Generated Auth Token:', token)
    res.setHeader('Authorization', `Bearer ${token}`)
    return successResponse(
      res,
      { token, user: userData },
      'Authentication successful',
      200,
    )
  } catch (error) {
    return errorResponse(res, 'Authentication failed', 401, 'Not Authorized')
  }
}

export const userExists = async (uid: string) => {
  try {
    const userRecord = await prisma.user.findUnique({
      where: { firebaseUid: uid },
    })
    return userRecord
  } catch (error) {
    console.error('User Not Found :', error)
    return false
  }
}

const createUser = async (user: User) => {
  try {
    const newUser = await prisma.user.create({
      data: { ...user, lastLogin: new Date() },
    })
    return newUser
  } catch (error) {
    console.error('Error creating user:', error)
    return null
  }
}

const roleBasedAccess = {
  '/rider/auth': Role.RIDER,
  '/driver/auth': Role.DRIVER,
  '/admin/auth': Role.ADMIN,
}

export class AuthController {
  private authService: AuthenticationService

  constructor() {
    this.authService = new AuthenticationService()
  }

  authenticate = async (req: Request, res: Response): Promise<Response> => {
    const { idToken } = req.body
    const requestPath = req.originalUrl as keyof typeof ROLE_MAPPINGS

    const result = await this.authService.authentication(idToken, requestPath)
    res.setHeader('Authorization', `Bearer ${result.token}`)
    return successResponse(res, result, 'Authentication Successfull', 200)
  }
}
