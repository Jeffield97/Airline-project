import { Document } from "mongoose"

export interface IBook extends Document {
    name: String;
    description: String;
    price: number;
}
