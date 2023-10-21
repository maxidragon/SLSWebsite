-- CreateTable
CREATE TABLE `Competition` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `wcaId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `wcaWebsite` VARCHAR(191) NULL,
    `isPublic` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Competition_wcaId_key`(`wcaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Competitor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `wcaId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,

    UNIQUE INDEX `Competitor_wcaId_key`(`wcaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Result` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `competitionId` INTEGER NOT NULL,
    `competitorId` INTEGER NOT NULL,
    `eventId` VARCHAR(191) NOT NULL,
    `roundId` VARCHAR(191) NOT NULL,
    `pos` INTEGER NOT NULL,
    `best` INTEGER NOT NULL,
    `average` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
