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
</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Development](#-development)

## 🎯 About

EcoLift is a ride-sharing platform built with a modern microservices architecture using Node.js, TypeScript, and real-time technologies. It enables riders to request rides and drivers to accept and manage them with live updates.

## ✨ Features

### For Riders
- 🔍 Find nearby drivers
- 📍 Real-time ride tracking
- 🔔 Live notifications for ride updates
- 📊 View ride history

### For Drivers
- 🚗 Receive live ride requests
- ✅ Accept/reject rides
- 📱 Update availability status
- 📈 Track completed rides

## 🛠️ Tech Stack

- **Backend**: Node.js, TypeScript, Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Cache & Queues**: Redis, BullMQ
- **Real-time**: Socket.IO
- **Authentication**: Firebase Auth, JWT
- **Monorepo**: Turborepo

## 🏗️ Architecture

EcoLift uses a **microservices architecture**:

### Core Services

| Service | Port | Description |
|---------|------|-------------|
| **API Gateway** | 4000 | Routes requests to appropriate services |
| **Ride Service** | 8002 | Manages ride lifecycle and matching |
| **Driver Service** | 8003 | Handles driver profiles and availability |
| **Notification Service** | 3000 | Real-time notifications via Socket.IO |
| **Admin Service** | 4001 | Administrative operations |

### Shared Packages

- **@rider/shared** - Common utilities, auth middleware, types
- **@rider/db** - Prisma client and database schema
- **@rider/ui** - Reusable React components

## 🚀 Quick Start

### Prerequisites

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
JWT_SECRET=your_jwt_secret_key

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
```

Services will be available at:
- API Gateway: http://localhost:4000
- Ride Service: http://localhost:8002
- Driver Service: http://localhost:8003
- Notification Service: http://localhost:3000

## 📁 Project Structure

```
EcoLift/
├── apps/
│   ├── admin/                    # Admin service
│   ├── driver-service/           # Driver management
│   ├── gateway/                  # API Gateway
│   ├── notification-service/     # Real-time notifications
│   └── ride-service/             # Ride management
│       └── src/
│           ├── ride/             # Ride domain
│           ├── user/             # User domain
│           └── notification/     # Notification domain
├── packages/
│   ├── database/                 # Prisma schema & client
│   ├── shared/                   # Shared utilities
│   ├── ui/                       # React components
│   ├── eslint-config/            # ESLint configs
│   └── typescript-config/        # TS configs
├── .env                          # Environment variables
├── turbo.json                    # Turborepo config
└── package.json                  # Root package.json
```

## � Development

### Available Commands

```bash
# Start all services in development
npm run dev

# Start specific service
npm run dev -- --filter=ride-service

# Build all services
npm run build

# Database commands
npm run db:generate    # Generate Prisma client
npm run db:migrate     # Run migrations
npm run db:studio      # Open Prisma Studio
```

### Key Files & Flow

**Ride Request Flow:**
1. Rider creates ride request → Ride Service
2. Ride saved with `PENDING` status
3. Ride added to Redis queue (BullMQ)
4. Worker finds available driver
5. Driver receives notification (Socket.IO)
6. Driver accepts → OTP generated → Status: `IN_PROGRESS`
7. Driver picks up rider → Verify OTP → Status: `STARTED`
8. Driver completes ride → Status: `COMPLETED`

**Important Files:**
- `apps/ride-service/src/ride/` - Ride management logic
- `apps/driver-service/controllers/` - Driver operations
- `apps/notification-service/` - Real-time notifications
- `packages/shared/middleware/` - Auth middleware
- `packages/database/prisma/schema.prisma` - Database schema

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/Mukul-raii">Mukul</a></p>
  <p>
    <a href="#-about">Back to top ⬆️</a>
  </p>
</div>
