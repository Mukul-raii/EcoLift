import { AuthController, authenticate, authMiddleware } from '@rider/shared'
import { Router } from 'express'
import { userProfile } from '../controllers/user.controller'

const router = Router()
const authController = new AuthController()
const userController = new userProfile()

router.post('/auth', authController.authenticate)
router.get('/profile', authMiddleware, userController.getUserProfile)

export default router
