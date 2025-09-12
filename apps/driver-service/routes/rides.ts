import { authMiddleware } from '@rider/shared'
import { Router } from 'express'
import { RideController } from '../controllers/ride.controller'

const router = Router()
const driverController = new RideController()

router.get('/live-ride', authMiddleware, driverController.getDriverLiveRide)
router.get('/rides', authMiddleware, driverController.getdriverRides)

export default router
