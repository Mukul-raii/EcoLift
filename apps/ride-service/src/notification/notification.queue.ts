import { Queue } from 'bullmq'
import { logger } from '@rider/shared/dist'

export class NotificationQueue {
  private notifyQueue: Queue

  constructor() {
    this.notifyQueue = new Queue('notifications', {
      connection: {
        host: 'localhost',
        port: 6379,
      },
    })
  }

  // Add a notification job
  async sendNotification(
    riderId: string,
    driverId: string,
    message: string,
    data: object = {},
  ) {
    logger('Adding notification to queue:', {
      riderId,
      driverId,
      message,
      data,
    })
    await this.notifyQueue.add('sendNotification', {
      riderId,
      driverId,
      message,
      data,
    })
  }
}
