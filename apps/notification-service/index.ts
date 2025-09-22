import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { Ride } from '@rider/db'
import { RideService } from './services/Ride.service'

const app = express()
const httpServer = createServer(app)

// Create a Socket.IO server
const io = new Server(httpServer, {
  /* options */
  cors: { origin: '*' },
})

io.on('connection', (socket) => {
  // Driver joins their room
  socket.on('joinDriverRoom', (driverId: string) => {
    socket.join(`driver:${driverId}`)
    console.log(`Driver ${driverId} joined their room`)
  })

  // Rider joins their room
  socket.on('joinRiderRoom', (riderId: string) => {
    console.log('Rider joining room:', riderId)
    socket.join(`rider:${riderId}`)
    console.log(`Rider ${riderId} joined their room`)
  })

  //Rider requesting a ride
  socket.on('rideRequest', async (rideData: Partial<Ride>) => {
    const rideService = new RideService()
    const { driver, updateRide } = await rideService.requestRide(rideData, io)

    console.log('Ride assigned:', updateRide)
    // Emit updates to rider and driver rooms
    io.to(`driver:${driver.userId}`).emit('newRide', updateRide)
    io.to(`rider:${updateRide.riderId}`).emit('rideUpdate', updateRide)
  })

  socket.on('getRideStatus', async (rideData: string) => {
    const rideService = new RideService()
    const updateRide = await rideService.updateRideStatus(rideData, io)
  })
})

httpServer.listen(3000)
