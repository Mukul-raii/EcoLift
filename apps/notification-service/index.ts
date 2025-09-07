import * as express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  /* options */
  cors: { origin: '*' },
})

io.on('connection', (socket) => {
  // ...
  console.log('Client connected:', socket.id)
  socket.on('rideRequest', (data) => {
    console.log('Ride request received:', data)

    // example: forward to driver room
    io.to(`driver:${data.driverId}`).emit('newRide', data)
  })
})

httpServer.listen(3000)
