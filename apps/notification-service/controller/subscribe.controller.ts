// notification-subscriber.ts
import { createClient, RedisClientType } from 'redis'
import { Server } from 'socket.io'

export class NotificationSubscriber {
  private client: RedisClientType
  private io: Server

  constructor(io: Server) {
    this.io = io
    this.client = createClient({
      socket: { host: 'localhost', port: 6379 }, // make host same as publisher
    })
  }

  public async init() {
    await this.client.connect()

    // Subscribe to the same channel used by your NotificationService
    await this.client.subscribe('notifications', (rawMessage) => {
      console.log('📩 [Subscriber Service] Message received:', rawMessage)
      const { riderId, driverId, message: msg, data } = JSON.parse(rawMessage)
      console.log(`📩 [Subscriber Service] Received for ${driverId}: ${msg}`)
      this.io.to(`driver:${driverId}`).emit('rideRequested', data)
      this.io.emit('rideRequested', data)
      this.io.to(`rider:${riderId}`).emit('rideUpdate', data)

      // Here you can call your own logic, e.g.:
      // - Send WebSocket event
      // - Push mobile notification
      // - Store in DB
    })
  }
}
