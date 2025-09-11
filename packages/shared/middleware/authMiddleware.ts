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
    return errorResponse(res, 'Missing authorization', 401, 'TOKEN_MISSING')
  }
  const token = authHeader.split(' ')[1]

  if (!token) {
    return errorResponse(res, 'Mising Token ', 401, 'TOKEN_MISSING')
  }
  if (!process.env.JWT_SECRET) {
    return errorResponse(
      res,
      'Internal Server Error Security Token Not Found',
      500,
      'SERVER_ERROR',
    )
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (!decoded) {
      console.log('Decoded token is null or undefined')
      return errorResponse(res, 'Invalid Token ', 401, 'TOKEN_EXPIRED')
    }
    req.user = decoded
    next()
  } catch (error) {
    return errorResponse(res, 'Interal server error', 404, 'SERVER_ERROR')
  }
}
