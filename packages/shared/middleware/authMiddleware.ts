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
  const authHeader = req.headers['authorization'] // or req.get("Authorization")

  if (!authHeader) {
    return res.status(401).send('Unauthorized')
  }
  const token = authHeader.split(' ')[1]
  if (!token) {
    return res.status(401).send('Unauthorized')
  }

  if (!process.env.JWT_SECRET) {
    return res.status(500).send('JWT secret not configured')
  }

  try {
    const validToken = jwt.verify(token, process.env.JWT_SECRET)
    // If authentication is successful, call next() to proceed to the next middleware or route handler
    if (!validToken) {
      return res.status(401).send('Unauthorized')
    }
    req.user = jwt.decode(token)

    next()
  } catch (error) {
    return res.status(401).send('Unauthorized')
  }
}
