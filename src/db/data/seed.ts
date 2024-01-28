import { books, authors, genres, book_authors, book_genres } from './data';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.books.deleteMany();
    console.log('Deleted records in books table');

    await prisma.authors.deleteMany();
    console.log('Deleted records in authors table');

    await prisma.genres.deleteMany();
    console.log('Deleted records in genres table');

    await prisma.genres.createMany({ data: genres });
    await prisma.authors.createMany({ data: authors });
    await prisma.books.createMany({ data: books });
    await prisma.book_authors.createMany({ data: book_authors });
    await prisma.book_genres.createMany({ data: book_genres });

  } catch (e) {
    await prisma.$disconnect();
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
