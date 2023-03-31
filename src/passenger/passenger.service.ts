import { Injectable } from '@nestjs/common';
import { PassengerDTO } from './dto/passenger.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PASSENGER } from 'src/common/models/models';
import { IPassenger } from 'src/common/interfaces/user.interfaces.ts/passenger.interface';

@Injectable()
export class PassengerService {

  constructor(
    @InjectModel(PASSENGER.name) private readonly model: Model<IPassenger>,
  ) { }
  async create(passengerDto: PassengerDTO): Promise<IPassenger> {
    const newPassenger = new this.model(passengerDto);
    return newPassenger.save();
  }
  async findAll(): Promise<IPassenger[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IPassenger> {
    return await this.model.findById(id)
  }

  async update(id: string, passengerDto: PassengerDTO): Promise<IPassenger> {
    return await this.model.findByIdAndUpdate(id, passengerDto, {new:true})
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id)
    return { msg: "User deleted" }
  }
}
