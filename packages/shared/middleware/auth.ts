import { NextFunction, Request, Response } from 'express'
import { prisma, Role } from '@rider/db'
import admin from 'firebase-admin'
import { generateIdToken } from '../utils/jwtVerification'
import { NewUser } from '../Types/userTypes'

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
})

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { idToken } = req.body
  const requestPath = req.path
  if (!idToken) {
    return res.status(401).send('Unauthorized')
  }
  try {
    const decoded = await admin.auth().verifyIdToken(idToken)
    // Add decoded token to request for later use
    let user = await userExists(decoded.uid)
    if (!user) {
      const userRecord = await admin.auth().getUser(decoded.uid)
      const newUserData = {
        firebaseUid: userRecord.uid,
        email: userRecord?.email || '',
        name: userRecord.displayName || '',
        phone: userRecord.phoneNumber || '',
        role: roleBasedAccess[
          requestPath as keyof typeof roleBasedAccess
        ] as Role,
      }
      user = await createUser(newUserData)
    }
    const token = generateIdToken({ userId: user?.id, role: user?.role })
    res.setHeader('Authorization', `Bearer ${token}`)
    return res.status(201).json('User authenticated Successfully')
  } catch {
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
