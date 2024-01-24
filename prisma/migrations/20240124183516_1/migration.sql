/*
  Warnings:

  - You are about to drop the `book_genres` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `genres` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `book_authors` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `book_authors` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "genres_genre_name_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "book_genres";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "genres";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_book_authors" (
    "book_id" INTEGER NOT NULL,
    "author_id" INTEGER NOT NULL,

    PRIMARY KEY ("book_id", "author_id"),
    CONSTRAINT "book_authors_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books" ("book_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "book_authors_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "authors" ("author_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_book_authors" ("author_id", "book_id") SELECT "author_id", "book_id" FROM "book_authors";
DROP TABLE "book_authors";
ALTER TABLE "new_book_authors" RENAME TO "book_authors";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
