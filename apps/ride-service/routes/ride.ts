import { authMiddleware } from '@rider/shared/dist'
import { Router } from 'express'

const router = Router()

router.post('/find-ride', authMiddleware)
