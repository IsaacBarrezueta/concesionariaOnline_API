import { MongooseModule } from '@nestjs/mongoose';
import { CarsService } from './cars.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Car, CarSchema } from './car.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],
  controllers: [],
  providers: [CarsService],
})
export class CarsModule {}
