-- DropForeignKey
ALTER TABLE `task` DROP FOREIGN KEY `Task_sprintId_fkey`;

-- AlterTable
ALTER TABLE `task` MODIFY `sprintId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_sprintId_fkey` FOREIGN KEY (`sprintId`) REFERENCES `Sprint`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
