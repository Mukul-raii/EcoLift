import { Job, Queue, Worker } from 'bullmq'
import { RideRepository } from './ride.repository'
import { RideService } from './ride.service'
import { DriverProfile, DriverStatus, Ride, RideStatus } from '@rider/db'
import { stat } from 'fs'
import { errorLogger, logger, ServerError } from '@rider/shared/dist'
import { NotificationQueue } from '../notification/notification.queue'

export class RideWorker {
  private rideService: RideService
  private notificationQueue: NotificationQueue
  private rideQueue: Queue // ✅ add this

  constructor() {
    this.rideService = new RideService()
    this.notificationQueue = new NotificationQueue()
    this.rideQueue = new Queue('rideQueue', {
      connection: { host: 'localhost', port: 6379 },
    })
  }

  rideWorker = () =>
    new Worker(
      'rideQueue',
      async (job) => {
        switch (job.name) {
          case 'ride-request':
            try {
              console.log(
                'Processing ride-request job in rideWorker:',
                job.data,
              )
              const ride = await this.rideService.findRide(job.data)
              // notify the rider to updated the ride its been created to the queue'
              await this.notificationQueue.sendNotification(
                ride.riderId,
                ride.driverId || '',
                'rideRequested',
                ride,
              )
              console.log('Ride found in rideWorker:', ride)
              let driver = await this.findDriver()
              console.log('Driver found in rideWorker:', driver)
              //if driver not found return with a notification to the rider notify
              if (!driver) {
                return logger('No driver available at the moment')
              }
              ride.status = 'REQUESTED'
              ride.driverId = driver?.userId
              const updateRide = await this.rideService.updateRide(ride)
              console.log('Updated Ride in rideWorker:', updateRide)
              //send notification to the driver
              await this.notificationQueue.sendNotification(
                ride.driverId,
                ride.riderId,
                'rideRequested',
                updateRide,
              )
              console.log('Notification sent to driver in rideWorker')
            } catch (error) {
              errorLogger('Error processing ride-request job:', error)
              console.log('Error processing ride-request job:', error)
              throw new ServerError('Error processing ride-request job', error)
            }
          //request and notify the driver now we need to wait for its response from notification we can create a new queues for that when driver accepts , update the ride with driver details
          case 'ride-rejected':
            console.log('Processing ride-rejected job in rideWorker:', job.data)
            const rideRejected = await this.rideService.findRide(job.data)
            rideRejected.status = 'REQUESTED'
            rideRejected.driverId = ''
            const updateRideRejected =
              await this.rideService.updateRide(rideRejected)
            console.log('Updated Ride in rideWorker:', updateRideRejected)
            //request and notify the driver now we need to wait for its response from notification we can create a new queues for that when driver accepts , update the ride with driver details

            /*  await this.notificationQueue.sendNotification(
              newDriver.userId || '',
              'Ride has been REQUESTED',
            ) */
            await this.rideQueue.add(
              'ride-request',
              { rideRejected },
              {
                delay: 2000,
                attempts: 5,
                removeOnComplete: true,
                removeOnFail: false,
              },
            )

          case 'ride-accepted':
            //gererate otp/ connect driver to the ride
            const rideAccepted = await this.rideService.findRide(job.data)
            const updateRideAndDriver =
              await this.rideService.updateRideAndDriver(rideAccepted)
            //send notification to the driver
            await this.notificationQueue.sendNotification(
              rideAccepted.driverId || '',
              rideAccepted.riderId,
              'rideRequested',
              updateRideAndDriver!,
            )
            console.log("RIDE ACCEPTED AND DRIVER'S NOTIFIED")
        }
      },
      {
        connection: {
          host: 'localhost',
          port: 6379,
        },
      },
    )

  findDriver = async () => {
    let driver = await this.rideService.findDriver()
    // No driver available then i want to refind the driver
    if (!driver) {
      driver = await this.rideService.findDriver()
    }
    return driver
  }

  verifyRide = async (ride: Ride) => {
    if (ride.status === RideStatus.ACCEPTED) {
      const rideData = {
        ...ride,
        status: RideStatus.ASSIGNED,
      }

      const updateRide = await this.updateRideandDriverStatus(
        rideData,
        ride.driverId!,
        rideData.status as DriverStatus,
      )
      return updateRide
    }
  }

  async updateRideandDriverStatus(
    rideData: Ride,
    driverId: string,
    status: DriverStatus,
  ) {
    try {
      const updateRide = await this.rideService.updateRideAndDriver(
        rideData,
        driverId,
        status,
      )
      return updateRide
    } catch (error) {
      errorLogger('Error updating ride:', error)
      throw new ServerError('Error updating ride', error)
    }
  }
}
