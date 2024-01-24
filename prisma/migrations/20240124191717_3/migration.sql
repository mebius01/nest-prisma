-- CreateTable
CREATE TABLE "book_genres" (
    "book_id" INTEGER NOT NULL,
    "genre_id" INTEGER NOT NULL,

    PRIMARY KEY ("book_id", "genre_id"),
    CONSTRAINT "book_genres_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books" ("book_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "book_genres_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "genres" ("genre_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
