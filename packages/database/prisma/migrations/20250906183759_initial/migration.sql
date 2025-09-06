-- CreateTable
CREATE TABLE "public"."Rider" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Driver" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "licenseNumber" TEXT NOT NULL,
    "vehicleNumber" TEXT NOT NULL,
    "vehicleType" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'AVAILABLE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Ride" (
    "id" SERIAL NOT NULL,
    "riderId" INTEGER NOT NULL,
    "driverId" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'REQUESTED',
    "pickUpLat" DOUBLE PRECISION NOT NULL,
    "pickUpLong" DOUBLE PRECISION NOT NULL,
    "dropOffLat" DOUBLE PRECISION NOT NULL,
    "dropOffLong" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ride_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rider_uid_key" ON "public"."Rider"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "Rider_email_key" ON "public"."Rider"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Rider_phone_key" ON "public"."Rider"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_uid_key" ON "public"."Driver"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_email_key" ON "public"."Driver"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_phone_key" ON "public"."Driver"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_licenseNumber_key" ON "public"."Driver"("licenseNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_vehicleNumber_key" ON "public"."Driver"("vehicleNumber");

-- AddForeignKey
ALTER TABLE "public"."Ride" ADD CONSTRAINT "Ride_riderId_fkey" FOREIGN KEY ("riderId") REFERENCES "public"."Rider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Ride" ADD CONSTRAINT "Ride_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "public"."Driver"("id") ON DELETE SET NULL ON UPDATE CASCADE;
