/*
  Warnings:

  - Added the required column `publisher_id` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `books` ADD COLUMN `publisher_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `publishers` (
    `publisher_id` INTEGER NOT NULL AUTO_INCREMENT,
    `publisher_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`publisher_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `books` ADD CONSTRAINT `books_publisher_id_fkey` FOREIGN KEY (`publisher_id`) REFERENCES `publishers`(`publisher_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
