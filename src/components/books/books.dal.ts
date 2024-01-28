import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DBService } from 'src/db/db.service';

@Injectable()
export class BooksDal {
  constructor(private readonly db: DBService) {}

  async create(payload: Prisma.booksCreateInput) {
    try {
      const data = await this.db.books.create({
        data: payload,
        include: {
          book_genres: true,
          book_authors: true,
        },
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async list() {
    try {
      const data = await this.db.books.findMany({
        include: {
          book_authors: {
            select: { authors: { select: { author_name: true } } },
          },
        },
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async get(id: number) {
    try {
      const data = await this.db.books.findUnique({
        select: {
          title: true,
          book_authors: {
            select: { authors: true },
          },
          book_genres: {
            select: { genres: { select: { genre_name: true } } },
          },
          publishers: {
            select: { publisher_name: true },
          },
        },
        where: { book_id: id },
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, payload: Prisma.booksUpdateInput) {
    try {
      const data = await this.db.books.update({
        where: { book_id: id },
        data: payload,
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const data = await this.db.authors.delete({
        where: { author_id: id },
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}
