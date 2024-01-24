-- CreateTable
CREATE TABLE "genres" (
    "genre_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "genre_name" TEXT NOT NULL,
    "createed_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "genres_genre_name_key" ON "genres"("genre_name");
