import { authMiddleware } from '@rider/shared/dist'
import { Router } from 'express'
import { RideController } from '../controllers/ride.controller'

const router = Router()
const rideController = new RideController()

router.post('/find-ride', authMiddleware, rideController.findRide)

export default router
