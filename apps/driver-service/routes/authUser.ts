import { authenticate, authMiddleware } from '@rider/shared'
import { Router } from 'express'
import { userProfile } from '../controllers/driver'
import { driverRides } from '../controllers/rider'

const router = Router()

router.post('/auth', authenticate)
router.get('/profile', authMiddleware, userProfile)
router.patch('/status', authMiddleware)
router.get('/rides', authMiddleware, driverRides)

export default router
