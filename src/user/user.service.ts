import { HttpStatus, Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from 'src/common/interfaces/user.interfaces.ts/user.interfaces';
import { Model } from 'mongoose';
import { USER } from '../common/models/models';

@Injectable()
export class UserService {
  constructor(@InjectModel(USER.name) private readonly model: Model<IUser>) { }

  async create(userDTO: UserDTO): Promise<IUser> {
    const newUser = new this.model({ ...userDTO });
    return await newUser.save();
  }
  async findAll(): Promise<IUser[]> {
    return await this.model.find();
  }
  async findOne(idUser: string): Promise<IUser> {
    return await this.model.findById(idUser);
  }

  async update(idUser: string, userDto: UserDTO): Promise<IUser> {
    return await this.model.findByIdAndUpdate(idUser, userDto, { new: true });
  }
  async delete(idUSer: string) {
    await this.model.findByIdAndDelete(idUSer);
    return { Status: HttpStatus.OK, msg: 'User deleted' };
  }
}
