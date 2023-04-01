import { Controller, Get, Body, Post, Param, Put, Delete } from '@nestjs/common';
import { PassengerService } from './passenger.service';
import { PassengerDTO } from './dto/passenger.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Passengers')
@Controller('passenger')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) { }
  @ApiOperation({ summary: 'Create a user' })
  @Post()
  createPassenger(@Body() passengerDto: PassengerDTO) {
    return this.passengerService.create(passengerDto);
  }

  @Get()
  findAll() {
    return this.passengerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passengerService.findOne(id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() passengerDto: PassengerDTO) {
    return this.passengerService.update(id, passengerDto)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.passengerService.delete(id)
  }
}
