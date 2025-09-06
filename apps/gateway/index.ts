import express from 'express'
import proxy from 'express-http-proxy'
import 'dotenv/config'
const app = express()

app.use('/users', proxy('http://localhost:4001')) // user-service
app.use('/drivers', proxy('http://localhost:4002')) // driver-service
app.use('/rides', proxy('http://localhost:4003')) // ride-service
app.use('/notifications', proxy('http://localhost:4004')) // notif-service

app.listen(4000, () => {
  console.log('API Gateway running on port 4000')
})
