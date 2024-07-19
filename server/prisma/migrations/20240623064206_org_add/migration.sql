-- CreateTable
CREATE TABLE `Company` (
    `companyId` VARCHAR(36) NOT NULL,
    `companyName` VARCHAR(60) NOT NULL,
    `companyDescription` TEXT NOT NULL,

    UNIQUE INDEX `Company_companyName_key`(`companyName`),
    PRIMARY KEY (`companyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `userId` VARCHAR(36) NOT NULL,
    `firstName` VARCHAR(50) NOT NULL,
    `lastName` VARCHAR(50) NULL,
    `email` VARCHAR(191) NOT NULL,
    `companyId` VARCHAR(36) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task` (
    `taskId` VARCHAR(36) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,
    `type` VARCHAR(50) NOT NULL,
    `priority` VARCHAR(50) NOT NULL,
    `status` VARCHAR(50) NOT NULL,
    `sprintId` VARCHAR(191) NULL,

    PRIMARY KEY (`taskId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sprint` (
    `sprintId` VARCHAR(36) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `goals` TEXT NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `companyId` VARCHAR(36) NULL,

    PRIMARY KEY (`sprintId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TaskUser` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `taskId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `TaskUser_userId_taskId_key`(`userId`, `taskId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_UserTasks` (
    `A` VARCHAR(36) NOT NULL,
    `B` VARCHAR(36) NOT NULL,

    UNIQUE INDEX `_UserTasks_AB_unique`(`A`, `B`),
    INDEX `_UserTasks_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`companyId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_sprintId_fkey` FOREIGN KEY (`sprintId`) REFERENCES `Sprint`(`sprintId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sprint` ADD CONSTRAINT `Sprint_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`companyId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskUser` ADD CONSTRAINT `TaskUser_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskUser` ADD CONSTRAINT `TaskUser_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `Task`(`taskId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserTasks` ADD CONSTRAINT `_UserTasks_A_fkey` FOREIGN KEY (`A`) REFERENCES `Task`(`taskId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserTasks` ADD CONSTRAINT `_UserTasks_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;
