import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './car.schema';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<Car>) {}

  async create(createCarDto: CreateCarDto): Promise<Car> {
    const createdCar = new this.carModel(createCarDto);
    return createdCar.save();
  }

  async findAll(): Promise<Car[]> {
    return this.carModel.find().exec();
  }

  async findOne(id: string): Promise<Car> {
    return this.carModel.findById(id).exec();
  }

  async update(id: string, createCarDto: CreateCarDto): Promise<Car> {
    return this.carModel.findByIdAndUpdate(id, createCarDto, { new: true });
  }

  async remove(id: string): Promise<void> {
    await this.carModel.findByIdAndDelete(id);
  }
}
