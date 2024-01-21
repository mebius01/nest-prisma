import { Module } from '@nestjs/common';
import { BooksModule } from './components/books/books.module';
import { AuthorsModule } from './components/authors/authors.module';
import { PrismaModule } from './services/prisma/prisma.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [PrismaModule, AuthorsModule, BooksModule, DbModule],
})
export class AppModule {}
