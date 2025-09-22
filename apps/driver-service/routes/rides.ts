import { authMiddleware } from '@rider/shared'
import { Router } from 'express'
import { RideController } from '../controllers/ride.controller'

const router = Router()
const driverController = new RideController()

router.get('/live-ride', authMiddleware, driverController.getDriverLiveRide)
router.patch(
  '/update-status/:rideId',
  authMiddleware,
  driverController.updateRideStatus,
)
router.get('/rides', authMiddleware, driverController.getdriverRides)
router.patch(
  '/update-status/:rideId',
  authMiddleware,
  driverController.updateRideStatus,
)

export default router
