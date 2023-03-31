import { IsNotEmpty,IsString } from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsString()
  readonly username: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly password: string;
}
