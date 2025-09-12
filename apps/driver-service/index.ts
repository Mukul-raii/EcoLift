import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
import userAuth from './routes/user'

const app = express()
app.get('/ping', (req, res) => res.json({ msg: 'pong' }))

app.use(cookieParser())
app.use(express.json())
app.use(
  cors({
    origin: [
      'http://localhost:37921', // Flutter web dev server
    ], // allow all origins
    credentials: true,
    exposedHeaders: ['Authorization'],
  }),
)

app.use('/api/v1/driver', userAuth)

app.use('/', () => {
  console.log('Ride service up and running')
})
app.listen(8003, () => {
  console.log('Ride service listening on port 8003')
})
