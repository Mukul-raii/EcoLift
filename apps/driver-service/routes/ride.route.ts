import { authMiddleware } from '@rider/shared'
import { Router } from 'express'
import { RideController } from '../controllers/ride.controller'

const router = Router()
const driverController = new RideController()

//GET CURRENT ACCEPTED RIDE
router.get('/live-ride', authMiddleware, driverController.getDriverLiveRide)
//GET ALL RIDES FOR A DRIVER
router.get('/rides', authMiddleware, driverController.getdriverRides)
//Update ride status
router.patch(
  '/update-status/:rideId',
  authMiddleware,
  driverController.updateRideStatus,
)

export default router
