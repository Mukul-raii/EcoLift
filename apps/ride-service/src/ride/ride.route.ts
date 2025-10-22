import { authMiddleware } from '@rider/shared/dist'
import { Router } from 'express'
import { RideController } from './ride.controller'

const router = Router()
const rideController = new RideController()

//save a new ride
router.post('/find-ride', authMiddleware, rideController.findRide)
router.get('/user-rides', authMiddleware, rideController.getRides)
router.get('/live-rides', authMiddleware, rideController.fetchLiveRides)

//queue
//to request ride
router.patch('/request-ride', authMiddleware, rideController.requestRide)
router.patch('/accept-ride', authMiddleware, rideController.acceptRide)
router.patch('/reject-ride', authMiddleware, rideController.rejectRide)

router.post('/ride-prepared', authMiddleware, rideController.getRidePrepared)
router.patch('/start-ride', authMiddleware, rideController.startRide)
export default router
