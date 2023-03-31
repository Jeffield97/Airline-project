import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBook } from 'src/common/interfaces/user.interfaces.ts/book.interface';
import { BOOK } from 'src/common/models/models';
import { BookDTO } from './dto/book.dto';

@Injectable()
export class BookService {
  constructor(@InjectModel(BOOK.name) private readonly model: Model<IBook>) {}
  async create(bookDTO: BookDTO): Promise<IBook> {
    const newBook = new this.model(bookDTO);
    return newBook.save();
  }
}
