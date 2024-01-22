import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DBService } from 'src/db/db.service';

@Injectable()
export class BooksDal {
  constructor(private readonly db: DBService) {}

  async create(payload: Prisma.booksCreateInput) {
    try {
      const data = await this.db.books.create({ data: payload });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async list() {
    try {
      const data = await this.db.books.findMany();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async get(id: number) {
    try {
      const data = await this.db.books.findUnique({
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
