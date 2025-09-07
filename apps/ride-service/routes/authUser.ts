import { authenticate, authMiddleware } from '@rider/shared'
import { Router } from 'express'

const router = Router()

router.post('/auth', authenticate)
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Profile accessed successfully' })
})

export default router
