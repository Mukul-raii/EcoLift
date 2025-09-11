import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { findAvailableDriver } from '@rider/shared'
import { prisma, Ride } from '@rider/db'

const app = express()
const httpServer = createServer(app)

// Create a Socket.IO server
const io = new Server(httpServer, {
  /* options */
  cors: { origin: '*' },
})

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id)

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
  socket.on('rideRequest', async (rideData: any) => {
    console.log('Ride request received:', rideData)

    // Find first available driver
    const availableDriver = await findAvailableDriver(rideData)
    console.log('Available driver found:', availableDriver)
    if (!availableDriver) {
      return io.to(`rider:${rideData.riderId}`).emit('rideUpdate', {
        status: 'no_driver',
      })
    }
    const rides: any[] = []

    // Assign driver and mark unavailable
    availableDriver.status = 'AVAILABLE'
    const ride: Ride = {
      ...rideData,
      driverId: availableDriver.userId,
      status: 'assigned',
    }
    prisma.ride.update({
      where: { id: ride.id },
      data: { status: 'ASSIGNED', driverId: availableDriver.userId },
    })
    prisma.driverProfile.update({
      where: { userId: availableDriver.userId },
      data: { status: 'UNAVAILABLE' },
    })
    rides.push(ride)

    console.log('Ride assigned:', ride)
    // Emit updates to rider and driver rooms
    io.to(`driver:${availableDriver.userId}`).emit('newRide', ride)
    io.to(`rider:${rideData.riderId}`).emit('rideUpdate', ride)
  })
})

httpServer.listen(3000)
