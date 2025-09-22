import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { errorResponse } from '../utils/respose'

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
    return errorResponse(res, 401, 'Missing authorization', 'TOKEN_MISSING')
  }
  const token = authHeader.split(' ')[1]

  if (!token) {
    return errorResponse(res, 401, 'Missing Token ', 'TOKEN_MISSING')
  }
  if (!process.env.JWT_SECRET) {
    return errorResponse(
      res,
      500,
      'Internal Server Error Security Token Not Found',
      'SERVER_ERROR',
    )
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (!decoded) {
      console.log('Decoded token is null or undefined')
      return errorResponse(res, 401, 'Invalid Token ', 'TOKEN_EXPIRED')
    }
    req.user = decoded
    console.log('Authenticated user:', req.user)
    next()
  } catch (error) {
    return errorResponse(res, 500, 'Internal server error', 'SERVER_ERROR')
  }
}
