import { AuthController, authenticate, authMiddleware } from '@rider/shared'
import { Router } from 'express'
import { driverProfileController } from '../controllers/driver'
import { driverRides } from '../controllers/ride.controller'

const router = Router()

const authController = new AuthController()
const userProfile = new driverProfileController()

router.post('/auth/verify', authController.authenticate)
router.get('/profile', authMiddleware, userProfile.fetchDriverProfile)
router.patch('/profile', authMiddleware, userProfile.updateDriverProfile)
router.patch('/status', authMiddleware, userProfile.changeDriverStatus)

export default router
