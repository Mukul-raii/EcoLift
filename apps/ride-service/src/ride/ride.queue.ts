import { Ride } from '@rider/db'
import redis from '@rider/shared'
import { Queue } from 'bullmq'
import { logger } from '@rider/shared/dist'

export class RideQueue {
  private rideQueue: Queue

  // Function to initialize the queue
  constructor() {
    this.rideQueue = new Queue('rideQueue', {
      connection: {
        host: 'localhost',
        port: 6379,
      },
    })
  }

  //find
  rideRequest = async (rideData: Partial<Ride>) => {
    try {
      logger('Ride adding into ride queue:', rideData)
      //find the ride requested  in the queue
      await this.rideQueue.add('ride-request', rideData)
      logger('Ride added into ride queue:', rideData)

      //notify the rider to updated the ride its been created to the queue
      //find a driver for the ride ,and request and notify the driver
      //if driver accepts , update the ride with driver details
      //if driver rejects , find another driver
      //if no driver found after requesting 10 driver, notify the rider to try again later
    } catch (error) {
      throw new Error('Could not add ride request to the queue')
    }
  }

  rideReject = async (rideData: Partial<Ride>) => {
    try {
      //find the ride requested  in the queue
      await this.rideQueue.add('ride-rejected', rideData)

      //notify the rider to updated the ride its been created to the queue
      //find a driver for the ride ,and request and notify the driver
      //if driver accepts , update the ride with driver details
      //if driver rejects , find another driver
      //if no driver found after requesting 10 driver, notify the rider to try again later
    } catch (error) {
      throw new Error('Could not add ride request to the queue')
    }
  }

  rideAccept = async (rideData: Partial<Ride>) => {
    try {
      //find the ride requested  in the queue
      await this.rideQueue.add('ride-accepted', rideData)

      //notify the rider to updated the ride its been created to the queue
      //find a driver for the ride ,and request and notify the driver
      //if driver accepts , update the ride with driver details
      //if driver rejects , find another driver
      //if no driver found after requesting 10 driver, notify the rider to try again later
    } catch (error) {
      throw new Error('Could not add ride request to the queue')
    }
  }
}
