/*
  Warnings:

  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `CompetitionEvent` DROP FOREIGN KEY `CompetitionEvent_eventId_fkey`;

-- DropTable
DROP TABLE `Event`;
