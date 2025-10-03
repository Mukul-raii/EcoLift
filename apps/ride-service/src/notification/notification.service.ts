import { createClient } from 'redis'

export class NotificationService {
  private pub = createClient({ socket: { host: 'localhost', port: 6379 } })

  constructor() {
    this.pub.connect()
  }

  notifyRider = async (
    riderId: string,
    driverId: string,
    message: string,
    data: object,
  ) => {
    console.log('notifyRider:', riderId, driverId, message, data)
    await this.pub.publish(
      'notifications',
      JSON.stringify({ riderId, driverId, message, data }),
    )
  }
}
