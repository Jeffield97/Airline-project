import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class FlightDTO {
  @IsNotEmpty()
  @IsString()
  readonly pilot: string;
  @IsNotEmpty()
  @IsString()
  readonly ariplane: string;
  @IsNotEmpty()
  @IsString()
  readonly destinationCity: string;
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  readonly flightDate: Date;
}
