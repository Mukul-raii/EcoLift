import { Role } from '@rider/db'

export const AUTH_ERRORS = {
  NO_TOKEN: 'NO_TOKEN',
  INVALID_TOKEN: 'INVALID_TOKEN',
  TOKEN_EXPIRED: 'TOKEN_EXPIRED',
  TOKEN_REVOKED: 'TOKEN_REVOKED',
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  USER_CREATION_FAILED: 'USER_CREATION_FAILED',
  DATABASE_ERROR: 'DATABASE_ERROR',
  FIREBASE_ERROR: 'FIREBASE_ERROR',
} as const

// constants/auth.constants.ts
export const ROLE_MAPPINGS = {
  '/api/v1/rider/user/auth/verify': Role.RIDER,
  '/api/v1/driver/user/auth/verify': Role.DRIVER,
  '/api/v1/admin/user/auth/verify': Role.ADMIN,
} as const
