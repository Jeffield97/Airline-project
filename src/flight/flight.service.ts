import { HttpStatus, Injectable } from '@nestjs/common';
import { FlightDTO } from './dto/flight.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FLIGHT } from 'src/common/models/models';
import { Model } from 'mongoose';
import { IFlight } from 'src/common/interfaces/flight/flight.interface';

@Injectable()
export class FlightService {
  constructor(
    @InjectModel(FLIGHT.name) private readonly model: Model<IFlight>,
  ) {}
  async create(flightDTO: FlightDTO) {
    const newFlight = await new this.model(flightDTO);
    return await newFlight.save();
    // return flightDTO;
  }

  async findAll(): Promise<IFlight[]> {
    return await this.model.find().populate('passengers');
  }

  async findOne(id: string): Promise<IFlight> {
    return await this.model.findById(id).populate('passengers');
  }

  async update(id: string, flightDTO: FlightDTO): Promise<IFlight> {
    return await this.model.findByIdAndUpdate(id, flightDTO, { new: true });
  }
  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Flight Deleted' };
  }
  async addPasssenger(flightId: string, passengerId: string): Promise<IFlight> {
    return (
      await this.model.findByIdAndUpdate(
        flightId,
        { $addToSet: { passengers: passengerId } },
        { new: true },
      ).populate('passengers')
    )
  }
}
