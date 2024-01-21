import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DBService } from 'src/db/db.service';

@Injectable()
export class AuthorsService {
  constructor(private readonly db: DBService) {}

  async create(author: Prisma.authorsCreateInput) {
    try {
      const data = await this.db.authors.create({ data: author });
      return data;
    } catch (error) {
      throw error;
    }
  }

  list() {
    return `This action returns all authors`;
  }

  get(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, update: Prisma.authorsUpdateInput) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
