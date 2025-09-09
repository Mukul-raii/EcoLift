import { authMiddleware } from '@rider/shared/dist'
import { Router } from 'express'
import { findRide } from '../controllers/ride'

const router = Router()

router.post('/find-ride', authMiddleware, findRide)

export default router
