import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserDTO {

  @ApiProperty()
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  readonly name: string;
  @ApiProperty()
  @IsString()
  readonly username: string;
  @ApiProperty()
  @IsString()
  readonly email: string;
  @ApiProperty()
  @IsString()
  readonly password: string;
}
