import { Injectable } from '@nestjs/common';
import { CreateBookDto, UpdateBookDto } from './books.dto';
import { BooksDal } from './books.dal';

@Injectable()
export class BooksService {
  constructor(private readonly dal: BooksDal) {}

  async create(body: CreateBookDto) {
    //   const book = {
    //     title: 'test',
    //     book_genres: [1, 2],
    //     book_authors: [1, 2],
    //   };
    return await this.dal.create(body);
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
