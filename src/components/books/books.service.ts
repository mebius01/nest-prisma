import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateBookDto, UpdateBookDto } from './books.dto';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  async list() {
    try {
      const data = await this.prisma.books.findMany();
      return data;
    } catch (error) {
      throw error;
    }
  }

  get(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
