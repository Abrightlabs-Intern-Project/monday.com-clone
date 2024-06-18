/*
  Warnings:

  - You are about to alter the column `name` on the `sprint` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `name` on the `task` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `status` on the `task` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `priority` on the `task` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `type` on the `task` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `email` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `password` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `firstName` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `lastName` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `sprint` MODIFY `name` VARCHAR(100) NOT NULL,
    MODIFY `goals` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `task` MODIFY `name` VARCHAR(100) NOT NULL,
    MODIFY `description` TEXT NULL,
    MODIFY `status` VARCHAR(50) NOT NULL,
    MODIFY `priority` VARCHAR(50) NOT NULL,
    MODIFY `type` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `email` VARCHAR(100) NOT NULL,
    MODIFY `password` VARCHAR(100) NOT NULL,
    MODIFY `firstName` VARCHAR(50) NOT NULL,
    MODIFY `lastName` VARCHAR(50) NULL;
