import { Document } from "mongoose";
import { IPassenger } from "../user.interfaces.ts/passenger.interface";

export interface IFlight extends Document {
    pilot: string;
    ariplane: string;
    destinationCity: string;
    flightDate: Date;
    passengers: IPassenger[]
}
