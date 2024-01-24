import { Injectable } from '@nestjs/common';
import { CreateBookDto, UpdateBookDto } from './books.dto';
import { BooksDal } from './books.dal';
import { Prisma } from '@prisma/client';

@Injectable()
export class BooksService {
  constructor(private readonly dal: BooksDal) {}

  async create(body: CreateBookDto) {
    const book: Prisma.booksCreateInput = {
      title: body.title,
      book_genres: {
        create: body.genres.map((i) => ({ genre_id: i })), //[{ genre_id: 1 }],
      },
      book_authors: {
        create: body.authors.map((i) => ({ author_id: i })),
      },
    };
    return await this.dal.create(book);
  }

  async list() {
    return await this.dal.list();
  }

  async get(id: number) {
    return await this.dal.get(id);
  }

  async update(id: number, body: UpdateBookDto) {
    return await this.dal.update(id, body);
  }

  async remove(id: number) {
    return await this.dal.remove(id);
  }
}
