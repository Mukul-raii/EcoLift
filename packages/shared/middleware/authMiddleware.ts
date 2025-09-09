import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

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
  // Your authentication logic here
  console.log('Auth middleware triggered')
  const authHeader = req.headers['authorization'] // or req.get("Authorization")
  console.log('a  uthHeader:', authHeader)

  if (!authHeader) {
    return res.status(401).send('Unauthorized')
  }
  const token = authHeader.split(' ')[1]
  console.log('token:', token)
  if (!token) {
    return res.status(401).send('Unauthorized')
  }

  if (!process.env.JWT_SECRET) {
    return res.status(500).send('JWT secret not configured')
  }
  console.log('JWT_SECRET:', process.env.JWT_SECRET)
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    console.log('Decoded Token:', decoded)
    req.user = decoded // safe decoded payload
    next()
  } catch (error) {
    return res.status(401).send('Unauthorized')
  }
}
