import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DBService } from 'src/db/db.service';

@Injectable()
export class GenresDal {
  constructor(private readonly db: DBService) {}

  async create(payload: Prisma.genresCreateInput) {
    try {
      const data = await this.db.genres.create({ data: payload });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async list() {
    try {
      const data = await this.db.genres.findMany();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async get(id: number) {
    try {
      const data = await this.db.genres.findUnique({
        where: { genre_id: id },
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, payload: Prisma.genresUpdateInput) {
    try {
      const data = await this.db.genres.update({
        where: { genre_id: id },
        data: payload,
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const data = await this.db.genres.delete({
        where: { genre_id: id },
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}
