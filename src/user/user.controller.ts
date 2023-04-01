import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userServices: UserService) { }
  @Post()
  create(@Body() userDTO: UserDTO) {
    return this.userServices.create(userDTO);
  }

  @Get()
  findAll() {
    return this.userServices.findAll();
  }

  @Get(':idUser')
  findOne(@Param('idUser') id: string) {
    return this.userServices.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() userDto: UserDTO) {
    return this.userServices.update(id, userDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userServices.delete(id);
  }
}
