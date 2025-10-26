<div align="center">
  <h1>🚗 EcoLift</h1>
  <p><strong>A Modern Ride-Sharing Platform Built with Microservices Architecture</strong></p>
  
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
  [![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)
  [![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
  [![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)

  <p>
    <a href="#-features">Features</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-architecture">Architecture</a> •
    <a href="#-api-documentation">API Docs</a> •
    <a href="#-contributing">Contributing</a>
  </p>
</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Database Schema](#-database-schema)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 About

EcoLift is a comprehensive ride-sharing platform that connects riders with drivers in real-time. Built with a modern microservices architecture, it leverages Node.js, TypeScript, and cutting-edge technologies to provide a scalable, reliable, and efficient ride-sharing experience.

### Why EcoLift?

- **Real-time Communication**: Instant notifications using Socket.IO and Redis pub/sub
- **Scalable Architecture**: Microservices design for independent scaling
- **Secure Authentication**: Firebase Auth + JWT for robust security
- **Type Safety**: Full TypeScript implementation across all services
- **Modern Stack**: Latest technologies and best practices

## ✨ Features

### For Riders

- 🔍 **Smart Ride Matching** - Find nearby drivers instantly
- 📍 **Real-time Tracking** - Track your driver's location in real-time
- 🔔 **Live Notifications** - Get instant updates on ride status
- 📊 **Ride History** - View all your past and current rides
- 🔒 **Secure Payments** - OTP-based ride verification

### For Drivers

- 🚗 **Live Ride Requests** - Receive ride requests in real-time
- ✅ **Accept/Reject Rides** - Full control over ride acceptance
- 📱 **Status Management** - Update availability on the fly
- 📈 **Earnings Dashboard** - Track your completed rides
- 🗺️ **Route Optimization** - Efficient route suggestions

### For Admins

- 👥 **User Management** - Manage riders and drivers
- 📊 **Analytics Dashboard** - Monitor platform metrics
- 🔧 **System Monitoring** - Track service health and performance

## 🛠️ Tech Stack

<table>
  <tr>
    <td><strong>Backend</strong></td>
    <td>Node.js, TypeScript, Express.js</td>
  </tr>
  <tr>
    <td><strong>Database</strong></td>
    <td>PostgreSQL with Prisma ORM</td>
  </tr>
  <tr>
    <td><strong>Caching & Queues</strong></td>
    <td>Redis, BullMQ</td>
  </tr>
  <tr>
    <td><strong>Real-time</strong></td>
    <td>Socket.IO</td>
  </tr>
  <tr>
    <td><strong>Authentication</strong></td>
    <td>Firebase Auth, JWT</td>
  </tr>
  <tr>
    <td><strong>Monorepo</strong></td>
    <td>Turborepo</td>
  </tr>
  <tr>
    <td><strong>Code Quality</strong></td>
    <td>ESLint, Prettier, TypeScript</td>
  </tr>
</table>

## 🏗️ Architecture

EcoLift follows a **microservices architecture** with the following components:

```mermaid
graph TB
    Client[Client Apps] --> Gateway[API Gateway :4000]
    Gateway --> Ride[Ride Service :8002]
    Gateway --> Driver[Driver Service :8003]
    Gateway --> Admin[Admin Service :4001]

    Ride --> DB[(PostgreSQL)]
    Driver --> DB
    Admin --> DB

    Ride --> Redis[(Redis)]
    Driver --> Redis

    Notification[Notification Service :3000] --> Redis
    Notification --> Socket[Socket.IO]
    Socket --> Client

    Ride -.-> Queue[BullMQ Queues]
    Queue -.-> Redis
```

### Core Services

| Service                  | Port | Description                      | Key Technologies        |
| ------------------------ | ---- | -------------------------------- | ----------------------- |
| **API Gateway**          | 4000 | Request routing & load balancing | Express, HTTP Proxy     |
| **Ride Service**         | 8002 | Ride lifecycle management        | Express, Prisma, BullMQ |
| **Driver Service**       | 8003 | Driver profiles & availability   | Express, Prisma         |
| **Notification Service** | 3000 | Real-time notifications          | Socket.IO, Redis        |
| **Admin Service**        | 4001 | Administrative operations        | Express, Prisma         |

### Shared Packages

- **[@rider/shared](packages/shared)** - Common utilities, auth middleware, types
- **[@rider/db](packages/database)** - Prisma client and database schema
- **[@rider/ui](packages/ui)** - Reusable React components

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:

- **Node.js** >= 18.x
- **PostgreSQL** >= 14.x
- **Redis** >= 6.x
- **Firebase Admin SDK** credentials

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
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/rider

# Redis
REDIS_URL=redis://localhost:6379

# Authentication
JWT_SECRET=your_super_secret_jwt_key_here

# Firebase
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
```

4. **Initialize the database**

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

6. **Verify the setup**

- API Gateway: http://localhost:4000/ping
- Ride Service: http://localhost:8002/ping
- Driver Service: http://localhost:8003/ping
- Notification Service: http://localhost:3000

## 📁 Project Structure

```
EcoLift/
├── apps/
│   ├── admin/                    # Admin service
│   │   ├── controllers/
│   │   ├── services/
│   │   └── index.ts
│   ├── driver-service/           # Driver management
│   │   ├── controllers/          # Route controllers
│   │   ├── services/             # Business logic
│   │   ├── repositories/         # Data access layer
│   │   └── routes/               # API routes
│   ├── gateway/                  # API Gateway
│   │   └── index.ts
│   ├── notification-service/     # Real-time notifications
│   │   ├── controller/
│   │   ├── services/
│   │   └── repositories/
│   └── ride-service/             # Ride management
│       ├── src/
│       │   ├── ride/             # Ride domain
│       │   │   ├── ride.controller.ts
│       │   │   ├── ride.service.ts
│       │   │   ├── ride.repository.ts
│       │   │   ├── ride.queue.ts
│       │   │   └── ride.worker.ts
│       │   ├── user/             # User domain
│       │   └── notification/     # Notification domain
│       └── test/                 # Unit tests
├── packages/
│   ├── database/                 # Prisma schema & client
│   │   ├── prisma/
│   │   │   └── schema.prisma
│   │   └── src/
│   │       └── client.ts
│   ├── shared/                   # Shared utilities
│   │   ├── controller/           # Shared controllers
│   │   ├── middleware/           # Auth middleware
│   │   ├── types/                # TypeScript types
│   │   ├── utils/                # Utility functions
│   │   ├── services/             # Shared services
│   │   └── script/               # Helper scripts
│   ├── ui/                       # React components
│   ├── eslint-config/            # ESLint configs
│   └── typescript-config/        # TS configs
├── docs/                         # Documentation
│   ├── API_DOCS.md
│   ├── ARCHITECTURE.md
│   └── DATABASE.md
├── .env                          # Environment variables
├── turbo.json                    # Turborepo config
└── package.json                  # Root package.json
```

## 📡 API Documentation

### Authentication

All API endpoints (except public ones) require JWT authentication via Bearer token:

```http
Authorization: Bearer <your_jwt_token>
```

### Ride Service APIs

Base URL: `http://localhost:8002/api/v1/rider`

#### Create a Ride Request

```http
POST /ride/find-ride
Content-Type: application/json
Authorization: Bearer <token>

{
  "from_address": "123 Main Street",
  "to_address": "456 Park Avenue",
  "from_lat": 12.9716,
  "from_lng": 77.5946,
  "to_lat": 13.0827,
  "to_lng": 80.2707
}
```

**Response:**

```json
{
  "success": true,
  "code": 200,
  "message": "Ride started successfully",
  "data": {
    "id": 123,
    "riderId": "user_id",
    "status": "PENDING",
    "fromLocation": "123 Main Street",
    "toLocation": "456 Park Avenue",
    "createdAt": "2025-01-15T10:30:00Z"
  }
}
```

#### Get Live Rides

```http
GET /ride/live-rides
Authorization: Bearer <token>
```

#### Get Ride History

```http
GET /ride/user-rides
Authorization: Bearer <token>
```

#### Request Ride (Add to Queue)

```http
PATCH /ride/request-ride
Authorization: Bearer <token>
Content-Type: application/json

{
  "id": 123,
  "riderId": "user_id"
}
```

### Driver Service APIs

Base URL: `http://localhost:8003/api/v1/driver`

#### Get Driver Profile

```http
GET /profile
Authorization: Bearer <token>
```

#### Update Driver Status

```http
PATCH /status?status=AVAILABLE
Authorization: Bearer <token>
```

#### Get Live Ride

```http
GET /ride/live-ride
Authorization: Bearer <token>
```

#### Update Ride Status

```http
PATCH /ride/update-status/:rideId
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "ACCEPTED"
}
```

### Real-time Notifications (Socket.IO)

Connect to: `http://localhost:3000`

#### Driver Events

```javascript
// Connect to Socket.IO
const socket = io('http://localhost:3000')

// Join driver room
socket.emit('joinDriverRoom', driverId)

// Listen for ride requests
socket.on('rideRequest', (rideData) => {
  console.log('New ride request:', rideData)
  // Handle ride request UI
})

// Listen for room joined confirmation
socket.on('roomJoined', (data) => {
  console.log('Joined room:', data.room)
})
```

#### Rider Events

```javascript
// Join rider room
socket.emit('joinRiderRoom', riderId)

// Listen for ride updates
socket.on('rideUpdate', (updateData) => {
  console.log('Ride update:', updateData)
  // Update ride status in UI
})
```

For complete API documentation, see [docs/API_DOCS.md](docs/API_DOCS.md).

## 🗄️ Database Schema

### Entity Relationship Diagram

```
┌──────────────┐        ┌─────────────────┐        ┌──────────────┐
│     User     │◄───────┤  DriverProfile  │        │     Ride     │
├──────────────┤        ├─────────────────┤        ├──────────────┤
│ id (PK)      │        │ id (PK)         │        │ id (PK)      │
│ firebaseUid  │        │ userId (FK)     │───────►│ riderId (FK) │
│ name         │        │ licenseNumber   │        │ driverId (FK)│
│ email        │        │ vehicleNumber   │        │ status       │
│ phone        │        │ vehicleType     │        │ fromLocation │
│ role         │        │ status          │        │ toLocation   │
└──────────────┘        └─────────────────┘        │ otp          │
                                                    └──────────────┘
```

### Key Models

**User Model** ([`packages/database/prisma/schema.prisma`](packages/database/prisma/schema.prisma))

- Stores rider, driver, and admin information
- Links to [`DriverProfile`](packages/database/prisma/schema.prisma) for driver-specific data
- Relations: One-to-one with DriverProfile, One-to-many with Rides

**DriverProfile Model**

- Driver-specific information and status
- Status types: `AVAILABLE`, `UNAVAILABLE`, `ON_TRIP`
- Links to User via `userId` foreign key

**Ride Model**

- Complete ride information and lifecycle
- Status flow: `PENDING` → `REQUESTED` → `ACCEPTED` → `IN_PROGRESS` → `STARTED` → `COMPLETED`
- Includes OTP for ride verification

For detailed schema, see [docs/DATABASE.md](docs/DATABASE.md).

## 🔄 System Flow

### Ride Request Flow

```
1. Rider creates ride request
   ↓
2. Ride saved with status PENDING
   ↓
3. Ride added to Redis queue (BullMQ)
   ↓
4. Worker finds available driver
   ↓
5. Driver receives notification (Socket.IO)
   ↓
6. Driver accepts/rejects
   ├─ Accept → OTP generated, status: IN_PROGRESS
   └─ Reject → Find next driver
   ↓
7. Driver picks up rider → Verify OTP → status: STARTED
   ↓
8. Driver completes ride → status: COMPLETED
```

Key Components:

- [`RideService`](apps/ride-service/src/ride/ride.service.ts) - Business logic
- [`RideQueue`](apps/ride-service/src/ride/ride.queue.ts) - Queue management
- [`RideWorker`](apps/ride-service/src/ride/ride.worker.ts) - Background processing
- [`NotificationService`](apps/notification-service/services/Ride.service.ts) - Real-time updates

## 💻 Development

### Available Commands

```bash
# Install dependencies
npm install

# Start all services in development
npm run dev

# Start specific service
npm run dev -- --filter=ride-service
npm run dev -- --filter=driver-service

# Build all services
npm run build

# Run tests
npm run test

# Lint code
npm run lint

# Format code
npm run format

# Database commands
npm run db:generate    # Generate Prisma client
npm run db:migrate     # Run migrations
npm run db:deploy      # Deploy migrations (production)
npm run db:studio      # Open Prisma Studio
```

### Development Tools

- **Driver Simulator**: [`packages/shared/script/driver-simulator.js`](packages/shared/script/driver-simulator.js) - Simulates driver location updates
- **Health Checks**: All services expose `/ping` endpoints
- **Logging**: Structured logging via [`logger`](packages/shared/utils/respose.ts) and [`errorLogger`](packages/shared/utils/respose.ts)

### Testing

Run unit tests:

```bash
npm run test
```

Example tests can be found in [`apps/ride-service/test`](apps/ride-service/test).

## 🚀 Deployment

### Docker Deployment (Recommended)

1. **Create docker-compose.yml**

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: rider
      POSTGRES_USER: rider_user
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - '5432:5432'

  redis:
    image: redis:7-alpine
    ports:
      - '6379:6379'
    volumes:
      - redis_data:/data

  gateway:
    build:
      context: .
      dockerfile: apps/gateway/Dockerfile
    ports:
      - '4000:4000'
    depends_on:
      - ride-service
      - driver-service

  ride-service:
    build:
      context: .
      dockerfile: apps/ride-service/Dockerfile
    ports:
      - '8002:8002'
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - REDIS_URL=redis://redis:6379
      - JWT_SECRET=${JWT_SECRET}
    depends_on:
      - postgres
      - redis

  driver-service:
    build:
      context: .
      dockerfile: apps/driver-service/Dockerfile
    ports:
      - '8003:8003'
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - REDIS_URL=redis://redis:6379
      - JWT_SECRET=${JWT_SECRET}
    depends_on:
      - postgres
      - redis

  notification-service:
    build:
      context: .
      dockerfile: apps/notification-service/Dockerfile
    ports:
      - '3000:3000'
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - REDIS_URL=redis://redis:6379
    depends_on:
      - postgres
      - redis

volumes:
  postgres_data:
  redis_data:
```

2. **Deploy**

```bash
# Build images
docker-compose build

# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Production Checklist

- [ ] Set secure `JWT_SECRET`
- [ ] Configure Firebase credentials
- [ ] Set up database backups
- [ ] Configure Redis persistence
- [ ] Set up monitoring (e.g., PM2, Docker healthchecks)
- [ ] Enable HTTPS
- [ ] Set up reverse proxy (Nginx/Caddy)
- [ ] Configure environment-specific variables
- [ ] Run `npm run db:deploy` for migrations

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**

2. **Create a feature branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow TypeScript and ESLint rules
   - Add tests for new features
   - Update documentation

4. **Commit your changes**

   ```bash
   git commit -m 'feat: add amazing feature'
   ```

   Use conventional commits:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation
   - `refactor:` - Code refactoring
   - `test:` - Adding tests

5. **Push to the branch**

   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**

### Code Standards

- Use TypeScript for all new code
- Follow the existing project structure
- Write meaningful commit messages
- Add JSDoc comments for functions
- Ensure all tests pass
- Update README if adding new features

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Mukul-raii">
        <img src="https://github.com/Mukul-raii.png" width="100px;" alt="Mukul"/>
        <br />
        <sub><b>Mukul</b></sub>
      </a>
      <br />
      <sub>Creator & Maintainer</sub>
    </td>
  </tr>
</table>

## 🙏 Acknowledgments

- [Turborepo](https://turbo.build/) - Monorepo management
- [Prisma](https://www.prisma.io/) - Database ORM
- [Socket.IO](https://socket.io/) - Real-time communication
- [BullMQ](https://docs.bullmq.io/) - Job queues
- [Express.js](https://expressjs.com/) - Web framework
- [Firebase](https://firebase.google.com/) - Authentication

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/Mukul-raii">Mukul</a></p>
  <p>
    <a href="#-about">Back to top ⬆️</a>
  </p>
</div>
