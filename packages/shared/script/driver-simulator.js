// driver-simulator-axios.js
const axios = require('axios')

const DRIVER_ID = 'KBPT9XycSYXu2lNidAH4goOtdEu2'
const API_URL = 'http://192.168.29.35:8003/api/v1/driver/location'
const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyZWJhc2VVaWQiOiJLQlBUOVh5Y1NZWHUybE5pZEFINGdvT3RkRXUyIiwibmFtZSI6Im11a3VyMnNhaTIyMDBzc2RnNCIsImVtYWlsIjoibXVrdXIyc2FpMjIwMHNzZGc0QGdtYWlsLmNvbSIsInBob25lIjpudWxsLCJyb2xlIjoiRFJJVkVSIiwiY3JlYXRlZEF0IjoiMjAyNS0wOS0xMVQwOTowMDo1NC4xNjZaIiwidXBkYXRlZEF0IjoiMjAyNS0xMC0yNVQxMzo0MToxOC41MzlaIiwibGFzdExvZ2luIjoiMjAyNS0xMC0yNVQxMzo0MToxOC41MzhaIiwiaWF0IjoxNzYxNDAxMTc4LCJleHAiOjE3NjE0MDgzNzh9.1HF_wWZftWQgY29b7fzacDNDH13CJjjErjBRhbjkra0'

const routeCoordinates = [
  { latitude: 25.421069, longitude: 78.543237 },
  { latitude: 25.421068, longitude: 78.542523 },
  { latitude: 25.421081, longitude: 78.542462 },
  { latitude: 25.421144, longitude: 78.542437 },
  { latitude: 25.423003, longitude: 78.542385 },
  { latitude: 25.422983, longitude: 78.541816 },
  { latitude: 25.423523, longitude: 78.54177 },
  { latitude: 25.424249, longitude: 78.541686 },
  { latitude: 25.424722, longitude: 78.541644 },
  { latitude: 25.424784, longitude: 78.541626 },
  { latitude: 25.425517, longitude: 78.541621 },
  { latitude: 25.425984, longitude: 78.541623 },
  { latitude: 25.426797, longitude: 78.541635 },
  { latitude: 25.427597, longitude: 78.541628 },
  { latitude: 25.42801, longitude: 78.541664 },
  { latitude: 25.427964, longitude: 78.541139 },
  { latitude: 25.427118, longitude: 78.541138 },
  { latitude: 25.427055, longitude: 78.54108 },
  { latitude: 25.427005, longitude: 78.541106 },
  { latitude: 25.426913, longitude: 78.541119 },
  { latitude: 25.426314, longitude: 78.541073 },
  { latitude: 25.426291, longitude: 78.541024 },
  { latitude: 25.426278, longitude: 78.540638 },
  { latitude: 25.425764, longitude: 78.540656 },
  { latitude: 25.425709, longitude: 78.540672 },
  { latitude: 25.425448, longitude: 78.540881 },
  { latitude: 25.425038, longitude: 78.540336 },
]

const TOTAL_DURATION_MS = 3 * 60 * 1000
const NUMBER_OF_INTERVALS = routeCoordinates.length - 1
const UPDATE_INTERVAL = Math.floor(TOTAL_DURATION_MS / NUMBER_OF_INTERVALS)

let currentIndex = 0
let isRunning = false
let startTime = null
let successCount = 0
let failCount = 0

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3
  const φ1 = (lat1 * Math.PI) / 180
  const φ2 = (lat2 * Math.PI) / 180
  const Δφ = ((lat2 - lat1) * Math.PI) / 180
  const Δλ = ((lon2 - lon1) * Math.PI) / 180

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c
}

function formatElapsedTime(ms) {
  const seconds = Math.floor(ms / 1000)
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

async function updateDriverLocation(latitude, longitude) {
  try {
    const response = await axios.patch(
      API_URL,
      {
        location: {
          latitude: latitude,
          longitude: longitude,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: AUTH_TOKEN,
        },
        timeout: 10000, // 10 second timeout
      },
    )

    successCount++

    const elapsed = Date.now() - startTime
    const progress = (
      ((currentIndex + 1) / routeCoordinates.length) *
      100
    ).toFixed(1)
    const remaining = TOTAL_DURATION_MS - elapsed

    let distance = 0
    if (currentIndex > 0) {
      const prev = routeCoordinates[currentIndex - 1]
      distance = calculateDistance(
        prev.latitude,
        prev.longitude,
        latitude,
        longitude,
      )
    }

    const barLength = 20
    const filledLength = Math.floor(
      ((currentIndex + 1) / routeCoordinates.length) * barLength,
    )
    const bar = '█'.repeat(filledLength) + '░'.repeat(barLength - filledLength)

    console.log(
      `🚗 [${bar}] ${progress}% | ` +
        `Point ${currentIndex + 1}/${routeCoordinates.length} | ` +
        `Elapsed: ${formatElapsedTime(elapsed)} | ` +
        `Remaining: ${formatElapsedTime(remaining)} | ` +
        `Distance: ${distance.toFixed(1)}m`,
    )

    return response.data
  } catch (error) {
    failCount++
    console.error(`❌ Failed:`, error.response?.data || error.message)
    throw error
  }
}

async function simulateMovement() {
  if (!isRunning) return

  if (currentIndex >= routeCoordinates.length) {
    const totalTime = Date.now() - startTime
    console.log('\n🏁 Route completed!')
    console.log('═══════════════════════════════════════')
    console.log(
      `⏱️  Total time: ${formatElapsedTime(totalTime)} (${(totalTime / 1000).toFixed(1)}s)`,
    )
    console.log(`✅ Successful updates: ${successCount}`)
    console.log(`❌ Failed updates: ${failCount}`)
    console.log(
      `📈 Success rate: ${((successCount / (successCount + failCount)) * 100).toFixed(1)}%`,
    )
    console.log('═══════════════════════════════════════\n')
    stopSimulation()
    return
  }

  const { latitude, longitude } = routeCoordinates[currentIndex]

  try {
    await updateDriverLocation(latitude, longitude)
    currentIndex++

    if (currentIndex < routeCoordinates.length) {
      setTimeout(simulateMovement, UPDATE_INTERVAL)
    } else {
      setTimeout(simulateMovement, 0)
    }
  } catch (error) {
    console.log('⚠️  Retrying in 2 seconds...')
    setTimeout(simulateMovement, 2000)
  }
}

function startSimulation() {
  if (isRunning) return

  isRunning = true
  currentIndex = 0
  successCount = 0
  failCount = 0
  startTime = Date.now()

  console.log('🚀 Starting 3-Minute Driver Simulation')
  console.log('═══════════════════════════════════════')
  console.log(`📍 Total waypoints: ${routeCoordinates.length}`)
  console.log(
    `⏱️  Update interval: ${(UPDATE_INTERVAL / 1000).toFixed(2)} seconds`,
  )
  console.log(`🕐 Target duration: 3 minutes`)
  console.log('═══════════════════════════════════════\n')

  simulateMovement()
}

function stopSimulation() {
  isRunning = false
}

process.on('SIGINT', () => {
  console.log('\n\n⚠️  Interrupted')
  stopSimulation()
  process.exit(0)
})

startSimulation()
