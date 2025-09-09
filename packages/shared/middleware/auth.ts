import { NextFunction, Request, Response } from 'express'
import { prisma, Role } from '@rider/db'
import admin from 'firebase-admin'
import { generateIdToken } from '../utils/jwtVerification'
import { NewUser } from '../Types/userTypes'
import { error } from 'console'
import { auth } from '../utils/firebase'
export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { idToken } = req.body
  const requestPath = req.originalUrl
  console.log('Request Path:', requestPath, idToken)
  if (!idToken) {
    return res.status(401).send('Unauthorized')
  }
  try {
    const decoded = await auth.verifyIdToken(idToken)
    // Add decoded token to request for later use
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
      console.log('Creating New User:', newUserData, requestPath)
      userData = await createUser(newUserData)
    }
    const token = await generateIdToken({
      userId: userData?.firebaseUid,
      email: userData?.email,
      role: userData?.role,
    })
    console.log('Generated Token:', token)
    res.setHeader('Authorization', `Bearer ${token}`)
    return res.status(201).json('User authenticated Successfully')
  } catch (error) {
    console.log('Error in Token Verification', error)
    console.error('Error verifying ID token')
    return res.status(401).send('Unauthorized')
  }
}

export const userExists = async (uid: string) => {
  try {
    const userRecord = await prisma.user.findUnique({
      where: { firebaseUid: uid },
    })
    return userRecord
  } catch (error) {
    console.error('Error fetching user data:', error)
    return false
  }
}

const createUser = async (user: NewUser) => {
  try {
    const newUser = await prisma.user.create({
      data: { ...user },
    })
    return newUser
  } catch (error) {
    console.error('Error creating user:', error)
    return null
  }
}

const roleBasedAccess = {
  '/rider/auth': 'RIDER',
  '/driver/auth': 'DRIVER',
  '/admin/auth': 'ADMIN',
}
