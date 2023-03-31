import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BOOK } from 'src/common/models/models';
import { BookScheme } from './schema/book.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: BOOK.name,
        useFactory: () => {
          return BookScheme;
        },
      },
    ]),
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
