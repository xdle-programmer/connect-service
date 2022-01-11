/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[last_name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `last_name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
ADD COLUMN     "last_name" VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_last_name_key" ON "User"("last_name");
