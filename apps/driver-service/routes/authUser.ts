import { authenticate, authMiddleware } from '@rider/shared'
import { Router } from 'express'
import { userProfile } from '../controllers/driver'

const router = Router()

router.post('/auth', authenticate)
router.get('/profile', authMiddleware, userProfile)
router.patch('/status', authMiddleware)

export default router
