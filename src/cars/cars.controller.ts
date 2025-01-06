import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './car.schema';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  create(@Body() createCarDto: CreateCarDto): Promise<Car> {
    return this.carsService.create(createCarDto);
  }

  @Get()
  findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Car> {
    return this.carsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() createCarDto: CreateCarDto,
  ): Promise<Car> {
    return this.carsService.update(id, createCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.carsService.remove(id);
  }
}
