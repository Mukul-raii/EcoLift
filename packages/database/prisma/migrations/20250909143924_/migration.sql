-- DropForeignKey
ALTER TABLE "public"."DriverProfile" DROP CONSTRAINT "DriverProfile_userId_fkey";

-- AlterTable
ALTER TABLE "public"."DriverProfile" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "public"."DriverProfile" ADD CONSTRAINT "DriverProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("firebaseUid") ON DELETE RESTRICT ON UPDATE CASCADE;
