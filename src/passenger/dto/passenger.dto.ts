import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';
export class PassengerDTO {
  @IsString()
  @ApiProperty()
  name: string;
  @IsEmail()
  @ApiProperty()
  email: string;
}
