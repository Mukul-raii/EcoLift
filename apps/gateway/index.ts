import express from 'express'
import proxy from 'express-http-proxy'
import 'dotenv/config'
const app = express()

app.use('/admin', proxy('http://localhost:4001')) // admin-service
app.use('/rides', proxy('http://localhost:8002')) // ride-service
app.use('/drivers', proxy('http://localhost:8003')) // driver-service

app.listen(4000, () => {
  console.log('API Gateway running on port 4000')
})
