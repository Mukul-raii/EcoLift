import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
import userAuth from './src/user/user.route'
import ride from './src/ride/ride.route'
import { RideWorker } from './src/ride/ride.worker'
import { notificationWorker } from './src/notification/notification.worker'
const app = express()

app.get('/ping', (req, res) => res.json({ msg: 'pong' }))

const rideWorkerInstance = new RideWorker()
const notificationInstance = new notificationWorker()
notificationInstance.sendNotificationWorker()
rideWorkerInstance.rideWorker()

app.use(cookieParser())
app.use(express.json())
app.use(
  cors({
    origin: ['http://localhost:8081', 'http://localhost:38139'],
    credentials: true,
    exposedHeaders: ['Authorization'],
  }),
)
app.use(
  '/api/v1/rider/user',
  (req, res, next) => {
    console.log('Hit rider route')
    next()
  },
  userAuth,
)

app.use(
  '/api/v1/rider/ride',
  (req, res, next) => {
    console.log('Hit rider route')
    next()
  },
  ride,
)

app.get('/', (req, res) => {
  res.send('Ride service up and running 🚀')
})

app.listen(8002, '0.0.0.0', () => {
  console.log('Ride service listening on port 8002')
})
