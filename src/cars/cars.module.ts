import { MongooseModule } from '@nestjs/mongoose';
import { CarsService } from './cars.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Car, CarSchema } from './car.schema';
import { CarsController } from './cars.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],
  providers: [CarsService],
  controllers: [CarsController],
})
export class CarsModule {}
