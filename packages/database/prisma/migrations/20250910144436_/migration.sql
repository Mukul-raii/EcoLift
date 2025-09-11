-- DropForeignKey
ALTER TABLE "public"."Ride" DROP CONSTRAINT "Ride_driverId_fkey";

-- AlterTable
ALTER TABLE "public"."Ride" ALTER COLUMN "driverId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "public"."Ride" ADD CONSTRAINT "Ride_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "public"."User"("firebaseUid") ON DELETE SET NULL ON UPDATE CASCADE;
