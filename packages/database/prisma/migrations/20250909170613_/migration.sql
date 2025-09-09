-- DropForeignKey
ALTER TABLE "public"."Ride" DROP CONSTRAINT "Ride_riderId_fkey";

-- AlterTable
ALTER TABLE "public"."Ride" ALTER COLUMN "riderId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "public"."Ride" ADD CONSTRAINT "Ride_riderId_fkey" FOREIGN KEY ("riderId") REFERENCES "public"."User"("firebaseUid") ON DELETE RESTRICT ON UPDATE CASCADE;
