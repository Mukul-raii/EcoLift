import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
import userAuth from './routes/authUser'

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors())

app.use('api/v1/driver', userAuth)

app.use('/', () => {
  console.log('Ride service up and running')
})
app.listen(8002, () => {
  console.log('Ride service listening on port 8002')
})
