import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Accessory } from './accessory.schema';
import { CreateAccessoryDto } from './dto/create-accessory.dto';

@Injectable()
export class AccessoriesService {
  constructor(
    @InjectModel(Accessory.name) private accessoryModel: Model<Accessory>,
  ) {}

  async create(createAccessoryDto: CreateAccessoryDto): Promise<Accessory> {
    const createdAccessory = new this.accessoryModel(createAccessoryDto);
    return createdAccessory.save();
  }

  async findAll(): Promise<Accessory[]> {
    return this.accessoryModel.find().exec();
  }

  async findOne(id: string): Promise<Accessory> {
    return this.accessoryModel.findById(id).exec();
  }

  async update(
    id: string,
    createAccessoryDto: CreateAccessoryDto,
  ): Promise<Accessory> {
    return this.accessoryModel.findByIdAndUpdate(id, createAccessoryDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<void> {
    await this.accessoryModel.findByIdAndDelete(id);
  }
}
