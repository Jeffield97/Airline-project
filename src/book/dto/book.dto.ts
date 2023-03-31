import { IsString } from 'class-validator';
export class BookDTO {
    @IsString()
    readonly name: string;
    @IsString()
    readonly description: string;
    @IsString()
    readonly price: number;
}
