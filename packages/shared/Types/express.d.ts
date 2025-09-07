import { Request } from 'express'

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string
        firebaseUid: string
        role: string
        name: string
        email: string
        phone: string
      }
    }
  }
}
