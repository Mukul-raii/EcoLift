// notification-service/index.ts
import { Worker } from 'bullmq'
import { NotificationService } from './notification.service'

export class notificationWorker {
  private notificationService: NotificationService
  constructor() {
    this.notificationService = new NotificationService()
  }
  sendNotificationWorker = () =>
    new Worker(
      'notifications',
      async (job) => {
        const { riderId, driverId, message, data } = job.data
        await this.sendWebSocket(riderId, driverId, message, data)
      },
      {
        connection: {
          host: 'localhost',
          port: 6379,
        },
      },
    )

  // simple function to simulate notification
  sendWebSocket = async (
    riderId: string,
    driverId: string,
    message: string,
    data: object,
  ) => {
    console.log(
      `Sending to ${riderId} and ${driverId}: ${message} with data`,
      data,
    )
    await this.notificationService.notifyRider(riderId, driverId, message, data)
  }
}
