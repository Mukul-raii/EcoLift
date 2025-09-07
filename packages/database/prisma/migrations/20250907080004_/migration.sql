/*
  Warnings:

  - You are about to drop the column `token` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."User_token_key";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "token";
