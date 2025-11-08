import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { errorResponse } from '../utils/respose'
import { AuthenticationError, ServerError } from '../errors/auth.error'
import { TaskChooseOrganization } from '@clerk/clerk-react'

declare global {
  namespace Express {
    interface Request {
      user?: any
    }
  }
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers['authorization'] // or req.get("Authorization")
  if (!authHeader) {
    throw new AuthenticationError('Authorization header missing', 401)
  }
  const token = authHeader.split(' ')[1]
  if (!token) {
    throw new AuthenticationError('Token missing', 401)
  }
  if (!process.env.JWT_SECRET) {
    throw new ServerError('JWT_SECRET is not defined in environment variables')
  }
  try {
    let decoded
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
      throw new AuthenticationError('Invalid or expired token', 401)
    }
    if (!decoded) {
      throw new AuthenticationError('Invalid token', 401)
      return errorResponse(res, 401, 'Invalid Token ', 'TOKEN_EXPIRED')
    }
    req.user = decoded

    next()
  } catch (error) {
    return errorResponse(res, 500, 'Internal server error', error)
  }
}
