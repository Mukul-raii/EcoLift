import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
import userAuth from './routes/user.route'
import ride from './routes/ride'
const app = express()

app.get('/ping', (req, res) => res.json({ msg: 'pong' }))
app.use(cookieParser())
app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:8081', // allow all origins
    credentials: true,
    exposedHeaders: ['Authorization'],
  }),
)
app.use(
  '/api/v1/rider/user',
  (req, res, next) => {
    console.log('Hit rider route')
    next()
  },
  userAuth,
)

app.use(
  '/api/v1/rider/ride',
  (req, res, next) => {
    console.log('Hit rider route')
    next()
  },
  ride,
)

app.get('/', (req, res) => {
  res.send('Ride service up and running 🚀')
})

app.listen(8002, '0.0.0.0', () => {
  console.log('Ride service listening on port 8002')
})
