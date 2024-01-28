import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DBService } from 'src/db/db.service';
import { get, list } from './authors.sql';

@Injectable()
export class AuthorsDal {
  constructor(private readonly db: DBService) {}

  async create(payload: Prisma.authorsCreateInput) {
    try {
      const data = await this.db.authors.create({ data: payload });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async list() {
    try {
      const data = await this.db.$queryRawUnsafe(list);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async get(id: number) {
    try {
      const data = await this.db.$queryRawUnsafe(get, id);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, payload: Prisma.authorsUpdateInput) {
    try {
      const data = await this.db.authors.update({
        where: { author_id: id },
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
