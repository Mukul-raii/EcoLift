/*
  Warnings:

  - Added the required column `fromLocation` to the `Ride` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toLocation` to the `Ride` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Ride" ADD COLUMN     "fromLocation" TEXT NOT NULL,
ADD COLUMN     "toLocation" TEXT NOT NULL,
ALTER COLUMN "pickUpLat" DROP NOT NULL,
ALTER COLUMN "pickUpLong" DROP NOT NULL,
ALTER COLUMN "dropOffLat" DROP NOT NULL,
ALTER COLUMN "dropOffLong" DROP NOT NULL;
