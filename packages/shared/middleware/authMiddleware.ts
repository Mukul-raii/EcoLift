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
  console.log('Auth Header:', authHeader)
  if (!authHeader) {
    return errorResponse(res, 'Missing authorization', 401, 'TOKEN_MISSING')
  }
  const token = authHeader.split(' ')[1]
  console.log('Extracted Token:', token)

  if (!token) {
    return errorResponse(res, 'Mising Token ', 401, 'TOKEN_MISSING')
  }
  console.log('JWT Secret:', process.env.JWT_SECRET)
  if (!process.env.JWT_SECRET) {
    return errorResponse(
      res,
      'Internal Server Error Security Token Not Found',
      500,
      'SERVER_ERROR',
    )
  }
  try {
    console.log('Verifying JWT Token...')
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (!decoded) {
      console.log('Decoded token is null or undefined')
      return errorResponse(res, 'Invalid Token ', 401, 'TOKEN_EXPIRED')
    }
    console.log('Decoded Token:', decoded)
    req.user = decoded
    next()
  } catch (error) {
    console.error('JWT Verification Error:', error)
    return errorResponse(res, 'Interal server error', 404, 'SERVER_ERROR')
  }
}
