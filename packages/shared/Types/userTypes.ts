import { Role } from '@rider/db'

export interface NewUser {
  firebaseUid: string
  email: string
  name: string
  phone: string
  role: Role
}
