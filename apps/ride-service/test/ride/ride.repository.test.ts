import { describe, it, expect, vi, beforeEach } from 'vitest'
import { RideRepository } from '../../src/ride/ride.repository'
import { RideService } from '../../src/ride/ride.service'
import { $Enums } from '@rider/db'
import axios from 'axios'

vi.mock('../../src/ride/ride.repository')
vi.mock('axios') // Mock the whole axios module

describe('RideService', () => {
  let rideService: RideService
  let rideRepositoryMock: RideRepository

  beforeEach(() => {
    vi.clearAllMocks()
    rideService = new RideService()
    rideRepositoryMock = new RideRepository() as unknown as RideRepository
    rideService['rideRepository'] = rideRepositoryMock
  })

  describe('startRide', () => {
    it('should start a ride successfully for a valid user', async () => {
      //Gather
      const user = {
        id: '1',
        firebaseUid: 'user1223',
        role: 'RIDER',
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
      }
      const data = {
        from_address: '123 Main St',
        to_address: '456 Elm St',
        from_lat: 37.7749,
        from_lng: -122.4194,
        to_lat: 37.7749,
        to_lng: -122.4194,
      }

      const mockRide = {
        id: 1,
        riderId: user.id,
        driverId: null,
        status: $Enums.RideStatus.PENDING,
        fromLocation: data.from_address,
        toLocation: data.to_address,
        pickUpLat: data.from_lat,
        pickUpLong: data.from_lng,
        dropOffLat: data.to_lat,
        dropOffLong: data.to_lng,
        otp: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      //Run
      ;(
        rideRepositoryMock.createRide as unknown as ReturnType<typeof vi.fn>
      ).mockResolvedValue(mockRide)

      const result = await rideService.startRide(user, data)
      expect(result).toBe(mockRide)
      expect(rideRepositoryMock.createRide).toHaveBeenCalledWith(
        data,
        user.firebaseUid,
      )
      //Verify
    })
  })

  describe('fetchLiveRides', () => {
    it('should return the a live ride if present ', async () => {
      const user = {
        id: '1',
        firebaseUid: 'user1223',
        role: 'RIDER',
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
      }
      const mockRide = {
        id: 1,
        riderId: user.id,
        driverId: null,
        status: $Enums.RideStatus.PENDING,
        fromLocation: '123 Main St',
        toLocation: '456 Elm St ',
        pickUpLat: 37.7749,
        pickUpLong: -122.4194,
        dropOffLat: 37.7749,
        dropOffLong: -122.4194,

        otp: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      ;(
        rideRepositoryMock.getRideByUserId as unknown as ReturnType<
          typeof vi.fn
        >
      ).mockResolvedValue(mockRide)

      const result = await rideService.fetchLiveRides(user)
      expect(result).toEqual(mockRide)
      expect(rideRepositoryMock.getRideByUserId).toHaveBeenCalledWith(
        user.firebaseUid,
      )
    })
  })

  describe('getRides', () => {
    it('should return all rides of rider ', async () => {
      const user = {
        id: '1',
        firebaseUid: 'user1223',
        role: 'RIDER',
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
      }
      const mockRides = [
        {
          id: 1,
          riderId: user.id,
          driverId: null,
          status: $Enums.RideStatus.PENDING,
          fromLocation: '123 Main St',
          toLocation: '456 Elm St ',
          pickUpLat: 37.7749,
          pickUpLong: -122.4194,
          dropOffLat: 37.7749,
          dropOffLong: -122.4194,

          otp: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          riderId: user.id,
          driverId: null,
          status: $Enums.RideStatus.PENDING,
          fromLocation: '123 Main St',
          toLocation: '456 Elm St ',
          pickUpLat: 37.7749,
          pickUpLong: -122.4194,
          dropOffLat: 37.7749,
          dropOffLong: -122.4194,

          otp: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]

      ;(
        rideRepositoryMock.getRides as unknown as ReturnType<typeof vi.fn>
      ).mockResolvedValue(mockRides)

      const result = await rideService.getRides(user)
      expect(result).toEqual(mockRides)
      expect(rideRepositoryMock.getRides).toHaveBeenCalledWith(user)
    })
  })

  describe('findRide', () => {
    it('should return ride with the partial ridedata ', async () => {
      const rideData = {
        id: 1,
        riderId: '1',
        driverId: null,
        status: $Enums.RideStatus.PENDING,
        fromLocation: '123 Main St',
        toLocation: '456 Elm St ',
        pickUpLat: 37.7749,
        pickUpLong: -122.4194,
        dropOffLat: 37.7749,
        dropOffLong: -122.4194,

        otp: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ;(
        rideRepositoryMock.findRide as unknown as ReturnType<typeof vi.fn>
      ).mockResolvedValue(rideData)

      const result = await rideService.findRide(rideData)
      expect(result).toEqual(rideData)
      expect(rideRepositoryMock.findRide).toHaveBeenCalledWith(rideData)
    })
  })

  describe('findDriver', () => {
    it('it should find a driver for ride', async () => {
      const driver = {
        id: 1,
        status: $Enums.DriverStatus.AVAILABLE,
        userId: '1',
        licenseNumber: 'ABC123',
        vehicleNumber: 'XYZ789',
        vehicleType: 'car',
      }
      ;(
        rideRepositoryMock.findAvailableDriver as unknown as ReturnType<
          typeof vi.fn
        >
      ).mockResolvedValue(driver)
      const result = await rideService.findDriver()
      expect(result).toEqual(driver)
    })
  })
  describe('updateRide', () => {
    it('it should update the ride with updated data ', async () => {
      const rideData = {
        id: 1,
        riderId: '1',
        driverId: null,
        status: $Enums.RideStatus.PENDING,
        fromLocation: '123 Main St',
        toLocation: '456 Elm St ',
        pickUpLat: 37.7749,
        pickUpLong: -122.4194,
        dropOffLat: 37.7749,
        dropOffLong: -122.4194,
        otp: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ;(
        rideRepositoryMock.updateRide as unknown as ReturnType<typeof vi.fn>
      ).mockResolvedValue(rideData)

      const result = await rideService.updateRide(rideData)
      expect(result).toEqual(rideData)
      expect(rideRepositoryMock.updateRide).toHaveBeenCalledWith(rideData)
    })
  })
  describe('updateRideAndDriver', () => {
    it('should updatethe ride and driver ', async () => {
      const updatedRideData = {
        id: 1,
        riderId: '1',
        driverId: '1',
        status: $Enums.RideStatus.PENDING,
        fromLocation: '123 Main St',
        toLocation: '456 Elm St ',
        pickUpLat: 37.7749,
        pickUpLong: -122.4194,
        dropOffLat: 37.7749,
        dropOffLong: -122.4194,
        otp: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ;(
        rideRepositoryMock.updateRideAndDriver as unknown as ReturnType<
          typeof vi.fn
        >
      ).mockResolvedValue(updatedRideData)

      const result = await rideService.updateRideAndDriver(updatedRideData)
      expect(result).toEqual(updatedRideData)
      expect(rideRepositoryMock.updateRideAndDriver).toHaveBeenCalledWith(
        updatedRideData,
      )
    })
  })
  describe('ridePrepared', () => {
    it('should return the ride prepared data', async () => {
      const rideData = {
        from_lat: 37.7749,
        from_lng: -122.4194,
        from_address: '123 Main St',
        to_lat: 37.7749,
        to_lng: -122.4194,
        to_address: '456 Elm St',
      }

      // Mock axios response
      ;(axios.get as unknown as vi.Mock).mockResolvedValue({
        data: {
          features: [
            {
              properties: {
                summary: {
                  distance: 1000, // in meters
                  duration: 600, // in seconds
                },
              },
            },
          ],
        },
      })

      const result = await rideService.ridePrepared(rideData)

      expect(result).toEqual({
        distance: 1000,
        duration: 600,
        estimatedprices: 20, // 1000 * 0.02
      })
    })
  })
})
