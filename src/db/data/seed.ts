import {
  books,
  authors,
  genres,
  book_authors,
  book_genres,
  publishers,
} from './data';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.books.deleteMany();
    await prisma.publishers.deleteMany();
    await prisma.authors.deleteMany();
    await prisma.genres.deleteMany();

    await prisma.genres.createMany({ data: genres });
    await prisma.authors.createMany({ data: authors });
    await prisma.publishers.createMany({ data: publishers });
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
