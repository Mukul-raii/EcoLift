/*
  Warnings:

  - The `status` column on the `DriverProfile` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `Ride` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "public"."DriverStatus" AS ENUM ('AVAILABLE', 'UNAVAILABLE', 'ON_TRIP');

-- CreateEnum
CREATE TYPE "public"."RideStatus" AS ENUM ('REQUESTED', 'ACCEPTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED', 'ASSIGNED');

-- AlterTable
ALTER TABLE "public"."DriverProfile" DROP COLUMN "status",
ADD COLUMN     "status" "public"."DriverStatus" NOT NULL DEFAULT 'UNAVAILABLE';

-- AlterTable
ALTER TABLE "public"."Ride" DROP COLUMN "status",
ADD COLUMN     "status" "public"."RideStatus" NOT NULL DEFAULT 'REQUESTED';
