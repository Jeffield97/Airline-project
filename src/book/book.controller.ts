import { Body, Controller, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDTO } from './dto/book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Post()
  create(@Body() bookDTO: BookDTO) {
    return this.bookService.create(bookDTO);
  }
}
