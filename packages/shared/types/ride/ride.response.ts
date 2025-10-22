import { $Enums } from '@rider/db'

export interface Ride {
  id: number
  riderId: string
  driverId: string | null
  status: $Enums.RideStatus
  fromLocation: string
  toLocation: string
  pickUpLat: number | null
  pickUpLong: number | null
  dropOffLat: number | null
  dropOffLong: number | null
  otp: string | null
  createdAt: Date
  updatedAt: Date
}

export interface RidePrepared {
  distance: number
  duration: number
  estimatedprices: number
}
