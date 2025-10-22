import { $Enums } from '@rider/db'

export interface RideForm {
  from_address: string
  to_address: string
  from_lat: number
  from_lng: number
  to_lat: number
  to_lng: number
}

export interface DriverType {
  id: number
  status: $Enums.DriverStatus
  userId: string
  licenseNumber: string
  vehicleNumber: string
  vehicleType: string
}
