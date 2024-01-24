import { PartialType } from '@nestjs/mapped-types';

export class CreateBookDto {
  title: string;
  authors: number[];
  genres: number[];
}

export class UpdateBookDto extends PartialType(CreateBookDto) {}
