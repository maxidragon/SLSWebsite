-- AddForeignKey
ALTER TABLE `Result` ADD CONSTRAINT `Result_competitionId_fkey` FOREIGN KEY (`competitionId`) REFERENCES `Competition`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Result` ADD CONSTRAINT `Result_competitorId_fkey` FOREIGN KEY (`competitorId`) REFERENCES `Competitor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
