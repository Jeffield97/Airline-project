import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class FlightDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly pilot: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly ariplane: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly destinationCity: string;
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  @ApiProperty()
  readonly flightDate: Date;
}
