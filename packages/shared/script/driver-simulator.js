// driver-simulator-axios.js
const axios = require('axios')

const DRIVER_ID = 'KBPT9XycSYXu2lNidAH4goOtdEu2'
const API_URL = 'http://192.168.29.35:8003/api/v1/driver/location'
const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyZWJhc2VVaWQiOiJLQlBUOVh5Y1NZWHUybE5pZEFINGdvT3RkRXUyIiwibmFtZSI6Im11a3VyMnNhaTIyMDBzc2RnNCIsImVtYWlsIjoibXVrdXIyc2FpMjIwMHNzZGc0QGdtYWlsLmNvbSIsInBob25lIjpudWxsLCJyb2xlIjoiRFJJVkVSIiwiY3JlYXRlZEF0IjoiMjAyNS0wOS0xMVQwOTowMDo1NC4xNjZaIiwidXBkYXRlZEF0IjoiMjAyNS0xMC0yNVQxNDowNjoxOC45NTBaIiwibGFzdExvZ2luIjoiMjAyNS0xMC0yNVQxNDowNjoxOC45NDhaIiwiaWF0IjoxNzYxNDYxNDUyLCJleHAiOjE3NjE0Njg2NTJ9.M-4_VCWW7UztiCfi4pJkyl9Yp60gR8tdnqMt0UhpuR0'
const routeCoordinates = [
  { latitude: 28.616539, longitude: 77.207338 },
  { latitude: 28.616348, longitude: 77.207305 },
  { latitude: 28.616241, longitude: 77.207361 },
  { latitude: 28.615931, longitude: 77.207138 },
  { latitude: 28.615971, longitude: 77.20619 },
  { latitude: 28.616005, longitude: 77.20566 },
  { latitude: 28.617081, longitude: 77.205727 },
  { latitude: 28.617213, longitude: 77.205648 },
  { latitude: 28.617287, longitude: 77.205636 },
  { latitude: 28.617359, longitude: 77.205642 },
  { latitude: 28.617453, longitude: 77.205678 },
  { latitude: 28.617534, longitude: 77.205744 },
  { latitude: 28.617595, longitude: 77.205834 },
  { latitude: 28.61763, longitude: 77.205941 },
  { latitude: 28.617691, longitude: 77.206006 },
  { latitude: 28.617755, longitude: 77.206035 },
  { latitude: 28.618199, longitude: 77.206063 },
  { latitude: 28.618715, longitude: 77.206077 },
  { latitude: 28.619154, longitude: 77.206103 },
  { latitude: 28.620003, longitude: 77.206152 },
  { latitude: 28.620092, longitude: 77.206132 },
  { latitude: 28.620179, longitude: 77.206046 },
  { latitude: 28.620223, longitude: 77.205968 },
  { latitude: 28.620349, longitude: 77.205854 },
  { latitude: 28.620496, longitude: 77.205812 },
  { latitude: 28.620573, longitude: 77.205817 },
  { latitude: 28.620704, longitude: 77.205873 },
  { latitude: 28.620791, longitude: 77.205961 },
  { latitude: 28.620846, longitude: 77.206056 },
  { latitude: 28.62087, longitude: 77.206144 },
  { latitude: 28.620973, longitude: 77.206225 },
  { latitude: 28.62177, longitude: 77.206275 },
  { latitude: 28.622179, longitude: 77.2063 },
  { latitude: 28.622473, longitude: 77.206317 },
  { latitude: 28.623089, longitude: 77.206351 },
  { latitude: 28.623185, longitude: 77.206358 },
  { latitude: 28.624255, longitude: 77.206432 },
  { latitude: 28.624657, longitude: 77.206463 },
  { latitude: 28.624839, longitude: 77.206459 },
  { latitude: 28.625002, longitude: 77.206454 },
  { latitude: 28.625941, longitude: 77.20652 },
  { latitude: 28.626198, longitude: 77.20651 },
  { latitude: 28.626317, longitude: 77.20644 },
  { latitude: 28.6264, longitude: 77.206345 },
  { latitude: 28.62647, longitude: 77.206211 },
  { latitude: 28.626564, longitude: 77.206097 },
  { latitude: 28.626699, longitude: 77.205998 },
  { latitude: 28.626851, longitude: 77.205941 },
  { latitude: 28.626978, longitude: 77.205929 },
  { latitude: 28.627104, longitude: 77.205946 },
  { latitude: 28.627265, longitude: 77.205857 },
  { latitude: 28.627374, longitude: 77.205761 },
  { latitude: 28.627747, longitude: 77.205159 },
  { latitude: 28.627855, longitude: 77.205008 },
  { latitude: 28.627931, longitude: 77.205023 },
  { latitude: 28.628854, longitude: 77.205133 },
  { latitude: 28.629835, longitude: 77.205215 },
  { latitude: 28.630918, longitude: 77.205312 },
  { latitude: 28.632636, longitude: 77.205419 },
  { latitude: 28.633146, longitude: 77.205438 },
  { latitude: 28.633497, longitude: 77.205452 },
  { latitude: 28.633543, longitude: 77.205379 },
  { latitude: 28.633606, longitude: 77.205325 },
  { latitude: 28.63368, longitude: 77.205294 },
  { latitude: 28.633759, longitude: 77.20529 },
  { latitude: 28.633835, longitude: 77.205312 },
  { latitude: 28.633919, longitude: 77.205377 },
  { latitude: 28.633982, longitude: 77.205487 },
  { latitude: 28.634742, longitude: 77.205474 },
  { latitude: 28.635111, longitude: 77.205531 },
  { latitude: 28.635364, longitude: 77.205616 },
  { latitude: 28.635791, longitude: 77.205937 },
  { latitude: 28.636309, longitude: 77.206326 },
  { latitude: 28.637131, longitude: 77.206943 },
  { latitude: 28.63773, longitude: 77.207337 },
  { latitude: 28.638212, longitude: 77.207697 },
  { latitude: 28.638345, longitude: 77.207749 },
  { latitude: 28.638468, longitude: 77.207761 },
  { latitude: 28.638996, longitude: 77.207586 },
  { latitude: 28.639094, longitude: 77.207577 },
  { latitude: 28.639199, longitude: 77.207588 },
  { latitude: 28.639281, longitude: 77.207626 },
  { latitude: 28.639569, longitude: 77.20782 },
  { latitude: 28.639709, longitude: 77.207628 },
  { latitude: 28.64031, longitude: 77.206524 },
  { latitude: 28.640359, longitude: 77.206434 },
  { latitude: 28.640517, longitude: 77.206141 },
  { latitude: 28.640563, longitude: 77.206056 },
  { latitude: 28.641002, longitude: 77.205234 },
  { latitude: 28.641037, longitude: 77.205165 },
  { latitude: 28.641209, longitude: 77.204857 },
  { latitude: 28.641322, longitude: 77.204684 },
  { latitude: 28.641788, longitude: 77.204181 },
  { latitude: 28.642221, longitude: 77.203813 },
  { latitude: 28.642782, longitude: 77.203191 },
  { latitude: 28.642852, longitude: 77.203091 },
  { latitude: 28.642966, longitude: 77.203036 },
  { latitude: 28.643089, longitude: 77.20304 },
  { latitude: 28.643199, longitude: 77.203101 },
  { latitude: 28.643271, longitude: 77.203195 },
  { latitude: 28.643405, longitude: 77.203355 },
  { latitude: 28.644063, longitude: 77.203669 },
  { latitude: 28.644996, longitude: 77.204199 },
  { latitude: 28.645897, longitude: 77.204953 },
  { latitude: 28.646119, longitude: 77.205099 },
  { latitude: 28.646219, longitude: 77.205165 },
  { latitude: 28.646331, longitude: 77.205213 },
  { latitude: 28.646483, longitude: 77.205217 },
  { latitude: 28.646574, longitude: 77.205157 },
  { latitude: 28.646616, longitude: 77.205153 },
  { latitude: 28.646687, longitude: 77.205176 },
  { latitude: 28.646731, longitude: 77.205216 },
  { latitude: 28.646755, longitude: 77.205272 },
  { latitude: 28.646832, longitude: 77.205425 },
  { latitude: 28.647046, longitude: 77.205513 },
  { latitude: 28.647687, longitude: 77.205579 },
  { latitude: 28.648421, longitude: 77.205477 },
  { latitude: 28.649598, longitude: 77.205246 },
  { latitude: 28.649819, longitude: 77.205219 },
  { latitude: 28.649991, longitude: 77.20519 },
  { latitude: 28.650178, longitude: 77.205152 },
  { latitude: 28.650566, longitude: 77.205089 },
  { latitude: 28.650665, longitude: 77.205071 },
  { latitude: 28.651609, longitude: 77.204898 },
  { latitude: 28.652205, longitude: 77.204762 },
  { latitude: 28.652286, longitude: 77.204743 },
  { latitude: 28.652303, longitude: 77.204676 },
  { latitude: 28.652441, longitude: 77.204411 },
  { latitude: 28.652629, longitude: 77.204061 },
  { latitude: 28.652825, longitude: 77.203696 },
  { latitude: 28.652952, longitude: 77.203468 },
  { latitude: 28.653392, longitude: 77.20264 },
  { latitude: 28.653432, longitude: 77.202566 },
  { latitude: 28.653848, longitude: 77.201769 },
  { latitude: 28.654235, longitude: 77.201046 },
  { latitude: 28.654715, longitude: 77.200162 },
  { latitude: 28.654962, longitude: 77.1997 },
  { latitude: 28.655622, longitude: 77.198342 },
  { latitude: 28.65616, longitude: 77.197235 },
  { latitude: 28.656431, longitude: 77.196714 },
  { latitude: 28.657832, longitude: 77.194101 },
  { latitude: 28.658411, longitude: 77.19303 },
  { latitude: 28.658467, longitude: 77.192918 },
  { latitude: 28.658727, longitude: 77.192246 },
  { latitude: 28.658932, longitude: 77.191639 },
  { latitude: 28.659428, longitude: 77.190176 },
  { latitude: 28.659745, longitude: 77.18925 },
  { latitude: 28.660121, longitude: 77.188136 },
  { latitude: 28.660529, longitude: 77.186932 },
  { latitude: 28.660717, longitude: 77.186373 },
  { latitude: 28.660922, longitude: 77.185765 },
  { latitude: 28.661578, longitude: 77.183821 },
  { latitude: 28.661759, longitude: 77.18332 },
  { latitude: 28.661963, longitude: 77.182844 },
  { latitude: 28.662119, longitude: 77.182586 },
  { latitude: 28.662643, longitude: 77.18204 },
  { latitude: 28.663013, longitude: 77.181623 },
  { latitude: 28.663209, longitude: 77.181322 },
  { latitude: 28.663317, longitude: 77.181081 },
  { latitude: 28.663417, longitude: 77.180802 },
  { latitude: 28.663467, longitude: 77.18049 },
  { latitude: 28.663491, longitude: 77.180344 },
  { latitude: 28.663595, longitude: 77.180391 },
  { latitude: 28.663904, longitude: 77.180527 },
  { latitude: 28.66431, longitude: 77.180702 },
  { latitude: 28.667045, longitude: 77.181923 },
  { latitude: 28.668579, longitude: 77.182719 },
  { latitude: 28.668918, longitude: 77.182879 },
  { latitude: 28.669362, longitude: 77.183084 },
  { latitude: 28.669894, longitude: 77.183333 },
  { latitude: 28.67004, longitude: 77.183402 },
  { latitude: 28.670793, longitude: 77.183803 },
  { latitude: 28.670961, longitude: 77.183919 },
  { latitude: 28.671321, longitude: 77.184281 },
  { latitude: 28.671448, longitude: 77.18443 },
  { latitude: 28.671948, longitude: 77.18505 },
  { latitude: 28.67281, longitude: 77.186161 },
  { latitude: 28.673426, longitude: 77.186953 },
  { latitude: 28.673675, longitude: 77.187328 },
  { latitude: 28.673695, longitude: 77.187371 },
  { latitude: 28.673772, longitude: 77.18748 },
  { latitude: 28.673906, longitude: 77.187627 },
  { latitude: 28.674056, longitude: 77.187747 },
  { latitude: 28.675162, longitude: 77.188396 },
  { latitude: 28.675587, longitude: 77.188665 },
  { latitude: 28.675695, longitude: 77.188733 },
  { latitude: 28.675986, longitude: 77.188917 },
  { latitude: 28.67614, longitude: 77.188994 },
  { latitude: 28.676292, longitude: 77.189051 },
  { latitude: 28.676442, longitude: 77.189058 },
  { latitude: 28.676691, longitude: 77.189004 },
  { latitude: 28.677036, longitude: 77.188809 },
  { latitude: 28.677542, longitude: 77.188442 },
  { latitude: 28.677692, longitude: 77.188319 },
  { latitude: 28.678443, longitude: 77.18756 },
  { latitude: 28.679057, longitude: 77.186742 },
  { latitude: 28.679897, longitude: 77.185737 },
  { latitude: 28.680129, longitude: 77.185491 },
  { latitude: 28.680303, longitude: 77.185352 },
  { latitude: 28.680473, longitude: 77.185283 },
  { latitude: 28.680485, longitude: 77.185278 },
  { latitude: 28.680912, longitude: 77.185105 },
  { latitude: 28.68104, longitude: 77.185052 },
  { latitude: 28.681321, longitude: 77.184883 },
  { latitude: 28.682295, longitude: 77.184035 },
  { latitude: 28.683462, longitude: 77.183018 },
  { latitude: 28.684072, longitude: 77.182486 },
  { latitude: 28.68468, longitude: 77.18192 },
  { latitude: 28.684802, longitude: 77.181697 },
  { latitude: 28.68495, longitude: 77.181302 },
  { latitude: 28.68538, longitude: 77.180157 },
  { latitude: 28.685562, longitude: 77.179787 },
  { latitude: 28.68641, longitude: 77.178416 },
  { latitude: 28.686612, longitude: 77.178066 },
  { latitude: 28.686754, longitude: 77.177781 },
  { latitude: 28.687062, longitude: 77.176942 },
  { latitude: 28.687781, longitude: 77.17511 },
  { latitude: 28.687908, longitude: 77.174831 },
  { latitude: 28.688042, longitude: 77.174537 },
  { latitude: 28.688103, longitude: 77.174403 },
  { latitude: 28.688205, longitude: 77.174474 },
  { latitude: 28.688677, longitude: 77.174813 },
  { latitude: 28.688953, longitude: 77.17501 },
  { latitude: 28.689062, longitude: 77.175087 },
  { latitude: 28.689563, longitude: 77.175438 },
  { latitude: 28.690195, longitude: 77.175898 },
  { latitude: 28.690964, longitude: 77.176446 },
  { latitude: 28.691501, longitude: 77.175436 },
  { latitude: 28.691662, longitude: 77.175154 },
  { latitude: 28.691798, longitude: 77.174936 },
  { latitude: 28.691927, longitude: 77.17478 },
  { latitude: 28.692581, longitude: 77.174103 },
  { latitude: 28.692798, longitude: 77.173881 },
  { latitude: 28.693019, longitude: 77.173655 },
  { latitude: 28.6926, longitude: 77.173114 },
  { latitude: 28.692376, longitude: 77.172825 },
  { latitude: 28.691991, longitude: 77.172328 },
  { latitude: 28.692104, longitude: 77.17221 },
  { latitude: 28.69242, longitude: 77.17188 },
  { latitude: 28.69254, longitude: 77.171754 },
  { latitude: 28.692144, longitude: 77.171281 },
  { latitude: 28.692016, longitude: 77.171088 },
  { latitude: 28.691882, longitude: 77.170839 },
]

const TOTAL_DURATION_MS = 2 * 60 * 1000
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
