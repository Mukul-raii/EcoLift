import { Role } from '@rider/db'

export interface User {
  id?: number
  firebaseUid: string
  name: string
  email: string
  phone?: string | null
  role: Role
  createdAt?: Date
  updatedAt?: Date
  lastLogin?: Date
}
