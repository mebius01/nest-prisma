import { PartialType } from '@nestjs/mapped-types';

export class CreateBookDto {
  title: string;
  author_id: number;
  genre_id: number;
}

export class UpdateBookDto extends PartialType(CreateBookDto) {}
