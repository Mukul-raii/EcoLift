import { authMiddleware } from '@rider/shared'
import { Router } from 'express'
import { driverRides } from '../controllers/rider'

const router = Router()

router.get('/rides', authMiddleware, driverRides)
export default router
