/*
  Warnings:

  - You are about to drop the column `sprintId` on the `task` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `task` DROP FOREIGN KEY `Task_sprintId_fkey`;

-- AlterTable
ALTER TABLE `task` DROP COLUMN `sprintId`,
    MODIFY `description` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_id_fkey` FOREIGN KEY (`id`) REFERENCES `Sprint`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
