import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { Ride } from '@rider/db'
import { RideService } from './services/Ride.service'
import { parse } from 'path'
import { NotificationSubscriber } from './controller/subscribe.controller'

const app = express()
const httpServer = createServer(app)

// Create a Socket.IO server
export const io = new Server(httpServer, {
  /* options */
  cors: { origin: '*' },
})

async function startServer() {
  // Initialize the NotificationSubscriber properly
  const notificationSubscriber = new NotificationSubscriber(io)
  await notificationSubscriber.init() // important: subscribe to Redis channel

  // Socket.IO connection
  io.on('connection', (socket) => {
    // Driver joins their room
    socket.on('joinDriverRoom', (driverId: string) => {
      socket.join(`driver:${driverId}`)
      console.log(`Driver ${driverId} joined their room`)
    })

    // Rider joins their room
    socket.on('joinRiderRoom', (riderId: string) => {
      socket.join(`rider:${riderId}`)
      console.log(`Rider ${riderId} joined their room`)
    })

    // Update ride status
    socket.on('getRideStatus', async (rideData: any) => {
      console.log('updated Ride status got from driver:', rideData)
    })
  })

  httpServer.listen(3000, () => {
    console.log('Server listening on port 3000 ✅')
  })
}

startServer()
