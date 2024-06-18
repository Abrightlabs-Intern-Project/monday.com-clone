/*
  Warnings:

  - The primary key for the `sprint` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `sprint` table. All the data in the column will be lost.
  - The primary key for the `task` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `task` table. All the data in the column will be lost.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `user` table. All the data in the column will be lost.
  - The required column `sprintId` was added to the `Sprint` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `taskId` was added to the `Task` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `userId` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE `_usertasks` DROP FOREIGN KEY `_UserTasks_A_fkey`;

-- DropForeignKey
ALTER TABLE `_usertasks` DROP FOREIGN KEY `_UserTasks_B_fkey`;

-- DropForeignKey
ALTER TABLE `task` DROP FOREIGN KEY `Task_id_fkey`;

-- DropForeignKey
ALTER TABLE `taskuser` DROP FOREIGN KEY `TaskUser_taskId_fkey`;

-- DropForeignKey
ALTER TABLE `taskuser` DROP FOREIGN KEY `TaskUser_userId_fkey`;

-- AlterTable
ALTER TABLE `sprint` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `sprintId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`sprintId`);

-- AlterTable
ALTER TABLE `task` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `sprintId` VARCHAR(191) NULL,
    ADD COLUMN `taskId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`taskId`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`userId`);

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_sprintId_fkey` FOREIGN KEY (`sprintId`) REFERENCES `Sprint`(`sprintId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskUser` ADD CONSTRAINT `TaskUser_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskUser` ADD CONSTRAINT `TaskUser_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `Task`(`taskId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserTasks` ADD CONSTRAINT `_UserTasks_A_fkey` FOREIGN KEY (`A`) REFERENCES `Task`(`taskId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserTasks` ADD CONSTRAINT `_UserTasks_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;
