import { IsString, IsEmail } from 'class-validator';
export class PassengerDTO {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
}
