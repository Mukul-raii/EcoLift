// notification-subscriber.ts
import { createClient, RedisClientType } from 'redis'
import { Server } from 'socket.io'
import { logger } from '@rider/shared'

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
      const { riderId, driverId, message: msg, data } = JSON.parse(rawMessage)
      logger({ riderId, driverId, message: msg, data })

      //msg is 'rideAccepted' here
      this.io.to(`driver:${driverId}`).emit(msg, data)
      this.io.to(`rider:${riderId}`).emit(msg, data)
      logger(
        `Event "${msg}" sent to BOTH driver ${driverId} and rider ${riderId}`,
      )

      // Here you can call your own logic, e.g.:
      // - Send WebSocket event
      // - Push mobile notification
      // - Store in DB
    })
  }
}
