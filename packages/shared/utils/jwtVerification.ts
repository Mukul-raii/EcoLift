import jwt from 'jsonwebtoken'

export const generateIdToken = async (user: any) => {
  const secret = process.env.JWT_SECRET

  if (!secret) {
    throw new Error('JWT_SECRET environment variable is not set')
  }

  return jwt.sign(
    {
      ...user,
    },
    secret,
    { expiresIn: '2h' },
  )
}
