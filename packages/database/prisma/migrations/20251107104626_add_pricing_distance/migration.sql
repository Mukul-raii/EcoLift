-- AlterTable
ALTER TABLE "public"."Ride" ADD COLUMN     "distanceInKm" DOUBLE PRECISION,
ADD COLUMN     "price" DOUBLE PRECISION,
ADD COLUMN     "timeDroppedOff" TIMESTAMP(3);
