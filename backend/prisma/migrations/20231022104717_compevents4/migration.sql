/*
  Warnings:

  - A unique constraint covering the columns `[competitionId,eventId]` on the table `CompetitionEvent` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `CompetitionEvent_eventId_fkey` ON `CompetitionEvent`;

-- CreateIndex
CREATE UNIQUE INDEX `CompetitionEvent_competitionId_eventId_key` ON `CompetitionEvent`(`competitionId`, `eventId`);
