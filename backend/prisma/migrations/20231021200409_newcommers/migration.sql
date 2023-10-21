/*
  Warnings:

  - You are about to drop the column `roundId` on the `Result` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Competitor` MODIFY `wcaId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Result` DROP COLUMN `roundId`;
