import IORedis from 'ioredis'

const redis = new IORedis({
  maxRetriesPerRequest: 3,
  enableReadyCheck: true,
  lazyConnect: false,
  connectTimeout: 10000,
  retryStrategy(times) {
    const delay = Math.min(times * 50, 2000)
    return delay
  },
})

export default redis
