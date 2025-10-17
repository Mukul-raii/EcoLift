# EcoLift - Ride-Sharing Platform

EcoLift is a comprehensive ride-sharing platform built with a microservices architecture using Node.js, TypeScript, Express, Prisma, and Redis. The platform enables riders to request rides and drivers to accept and complete ride requests through a real-time notification system.

## 🏗️ Architecture Overview

EcoLift follows a microservices architecture with the following components:

### Core Services

- **API Gateway** (Port 4000): Routes requests to appropriate services
- **Ride Service** (Port 8002): Handles ride requests, matching, and lifecycle management
- **Driver Service** (Port 8003): Manages driver profiles, availability, and ride acceptance
- **Notification Service** (Port 3000): Real-time notifications via Socket.IO and Redis pub/sub
- **Admin Service** (Port 4001): Administrative operations and monitoring

### Shared Packages

- **@rider/shared**: Common utilities, authentication middleware, and shared types
- **@rider/db**: Database client and Prisma schema management
- **@rider/ui**: React component library (shared UI components)

## 🗄️ Database Schema

The application uses PostgreSQL with Prisma ORM. Key entities include:

### User Model

```prisma
- id: Int (Primary Key)
- firebaseUid: String (Unique)
- name: String
- email: String
- phone: String?
- role: Role (RIDER | DRIVER | ADMIN)
- driverProfile: DriverProfile? (One-to-One)
- ridesAsRider: Ride[] (One-to-Many)
- ridesAsDriver: Ride[] (One-to-Many)
```

### DriverProfile Model

```prisma
- id: Int (Primary Key)
- userId: String (Foreign Key to User.firebaseUid)
- licenseNumber: String (Unique)
- vehicleNumber: String (Unique)
- vehicleType: String
- status: DriverStatus (AVAILABLE | UNAVAILABLE | ON_TRIP)
```

### Ride Model

```prisma
- id: Int (Primary Key)
- riderId: String (Foreign Key to User.firebaseUid)
- driverId: String? (Foreign Key to User.firebaseUid)
- status: RideStatus (PENDING | REQUESTED | ACCEPTED | REJECTED | IN_PROGRESS | STARTED | COMPLETED | CANCELLED | ASSIGNED)
- fromLocation: String
- toLocation: String
- pickUpLat: Float?
- pickUpLong: Float?
- dropOffLat: Float?
- dropOffLong: Float?
- otp: String?
- createdAt: DateTime
- updatedAt: DateTime
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- PostgreSQL
- Redis
- Firebase Admin SDK (for authentication)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mukul-raii/EcoLift.git
   cd EcoLift
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/rider
   JWT_SECRET=your_jwt_secret_key
   REDIS_URL=redis://localhost:6379
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_PRIVATE_KEY=your_firebase_private_key
   FIREBASE_CLIENT_EMAIL=your_firebase_client_email
   ```

4. **Set up the database**

   ```bash
   # Generate Prisma client
   npm run db:generate

   # Run migrations
   npm run db:migrate
   ```

5. **Start the services**

   ```bash
   # Start all services in development mode
   npm run dev

   # Or start individual services
   npm run dev -- --filter=ride-service
   npm run dev -- --filter=driver-service
   npm run dev -- --filter=notification-service
   npm run dev -- --filter=gateway
   ```

## 📡 API Documentation

### Authentication

All API endpoints (except public ones) require JWT authentication via Bearer token in the Authorization header.

```
Authorization: Bearer <jwt_token>
```

### Ride Service APIs (Port 8002)

#### Request a Ride

```http
POST /api/v1/rider/ride/find
Content-Type: application/json
Authorization: Bearer <token>

{
  "from": "Start Location",
  "to": "Destination Location",
  "pickupLat": 12.9716,
  "pickupLong": 77.5946,
  "dropoffLat": 13.0827,
  "dropoffLong": 80.2707
}
```

#### Get User's Rides

```http
GET /api/v1/rider/ride/history
Authorization: Bearer <token>
```

### Driver Service APIs (Port 8003)

#### Get Driver Profile

```http
GET /api/v1/driver/profile
Authorization: Bearer <token>
```

#### Update Driver Status

```http
PATCH /api/v1/driver/status?status=available
Authorization: Bearer <token>
```

#### Accept/Reject Ride

```http
POST /api/v1/driver/ride/accept
Content-Type: application/json
Authorization: Bearer <token>

{
  "rideId": 123,
  "action": "accept" // or "reject"
}
```

### Real-time Notifications (Port 3000)

The notification service uses Socket.IO for real-time communication.

#### Driver Events

```javascript
// Join driver room
socket.emit('joinDriverRoom', driverId)

// Listen for ride requests
socket.on('rideRequest', (rideData) => {
  // Handle ride request
})
```

#### Rider Events

```javascript
// Join rider room
socket.emit('joinRiderRoom', riderId)

// Listen for ride updates
socket.on('rideUpdate', (updateData) => {
  // Handle ride status updates
})
```

## 🔄 System Flow

1. **Ride Request**: Rider submits ride request via Ride Service
2. **Driver Matching**: System finds available drivers via Redis queue
3. **Real-time Notification**: Drivers receive ride requests via Socket.IO
4. **Ride Acceptance**: Driver accepts/rejects ride through Driver Service
5. **OTP Generation**: System generates OTP for ride verification
6. **Ride Completion**: Driver marks ride as completed with OTP verification

## 🛠️ Technology Stack

### Backend

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Cache/Message Queue**: Redis
- **Real-time**: Socket.IO
- **Authentication**: JWT + Firebase Auth

### DevOps & Tools

- **Monorepo**: Turborepo
- **Build Tool**: TypeScript Compiler
- **Linting**: ESLint
- **Formatting**: Prettier
- **Process Management**: PM2 (recommended for production)

### Key Dependencies

- **@prisma/client**: Database operations
- **bullmq**: Job queues for ride matching
- **ioredis**: Redis client
- **jsonwebtoken**: JWT token handling
- **firebase-admin**: Firebase authentication
- **express-http-proxy**: API Gateway proxying

## 📁 Project Structure

```
EcoLift/
├── apps/
│   ├── admin/                 # Admin service
│   ├── driver-service/        # Driver management service
│   ├── gateway/              # API Gateway
│   ├── notification-service/ # Real-time notifications
│   └── ride-service/         # Ride management service
├── packages/
│   ├── database/             # Prisma schema & client
│   ├── shared/               # Shared utilities & types
│   ├── ui/                   # React component library
│   ├── eslint-config/        # ESLint configurations
│   └── typescript-config/    # TypeScript configurations
├── prisma.config.ts          # Prisma configuration
├── turbo.json               # Turborepo configuration
└── package.json             # Root package configuration
```

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start all services in development
npm run dev

# Build all services
npm run build

# Lint code
npm run lint

# Format code
npm run format

# Type checking
npm run check-types

# Database operations
npm run db:generate    # Generate Prisma client
npm run db:migrate     # Run migrations
npm run db:deploy      # Deploy migrations (production)
```

## 🚀 Deployment

### Production Setup

1. **Environment Variables**: Set production values for DATABASE_URL, JWT_SECRET, etc.

2. **Database Migration**:

   ```bash
   npm run db:deploy
   ```

3. **Build Services**:

   ```bash
   npm run build
   ```

4. **Start Services**: Use PM2 or Docker for production deployment

### Docker Deployment (Recommended)

Create Dockerfiles for each service and use docker-compose for orchestration:

```yaml
# docker-compose.yml
version: '3.8'
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: rider
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password

  redis:
    image: redis:7-alpine

  ride-service:
    build: ./apps/ride-service
    ports:
      - '8002:8002'
    depends_on:
      - postgres
      - redis

  # ... other services
```

## 🔒 Security Features

- JWT-based authentication
- Firebase authentication integration
- OTP verification for ride completion
- CORS configuration
- Input validation and sanitization
- Secure environment variable management

## 📊 Monitoring & Logging

- Structured logging with error tracking
- Health check endpoints (`/ping`)
- Service-level logging for debugging
- Database connection pooling
- Redis connection monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards

- Use TypeScript for all new code
- Follow ESLint configuration
- Write meaningful commit messages
- Add tests for new features
- Update documentation for API changes

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

- **Mukul** - _Initial work_ - [Mukul-raii](https://github.com/Mukul-raii)

## 🙏 Acknowledgments

- Turborepo for monorepo management
- Prisma for database ORM
- Socket.IO for real-time features
- Express.js community
