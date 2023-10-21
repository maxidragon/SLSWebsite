/*
  Warnings:

  - A unique constraint covering the columns `[competitionId,competitorId,eventId]` on the table `Result` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Result_competitionId_competitorId_eventId_key` ON `Result`(`competitionId`, `competitorId`, `eventId`);
