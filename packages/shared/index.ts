import 'dotenv/config'

console.log('JWT_SECRET = share d', process.env.JWT_SECRET)
export * from './middleware/auth'
export * from './utils/jwtVerification'
export * from './middleware/authMiddleware'
export * from './utils/riderSearch'
