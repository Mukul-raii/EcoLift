/*
  Warnings:

  - You are about to drop the `Driver` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rider` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('RIDER', 'DRIVER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "public"."Ride" DROP CONSTRAINT "Ride_driverId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Ride" DROP CONSTRAINT "Ride_riderId_fkey";

-- DropTable
DROP TABLE "public"."Driver";

-- DropTable
DROP TABLE "public"."Rider";

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "firebaseUid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL DEFAULT 'RIDER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DriverProfile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "licenseNumber" TEXT NOT NULL,
    "vehicleNumber" TEXT NOT NULL,
    "vehicleType" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'AVAILABLE',

    CONSTRAINT "DriverProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_firebaseUid_key" ON "public"."User"("firebaseUid");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "public"."User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "DriverProfile_userId_key" ON "public"."DriverProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "DriverProfile_licenseNumber_key" ON "public"."DriverProfile"("licenseNumber");

-- CreateIndex
CREATE UNIQUE INDEX "DriverProfile_vehicleNumber_key" ON "public"."DriverProfile"("vehicleNumber");

-- AddForeignKey
ALTER TABLE "public"."DriverProfile" ADD CONSTRAINT "DriverProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Ride" ADD CONSTRAINT "Ride_riderId_fkey" FOREIGN KEY ("riderId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Ride" ADD CONSTRAINT "Ride_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
