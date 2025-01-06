import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AccessoriesService } from './accessories.service';
import { Accessory } from './accessory.schema';
import { CreateAccessoryDto } from './dto/create-accessory.dto';

@Controller('accessories')
export class AccessoriesController {
  constructor(private readonly accessoriesService: AccessoriesService) {}

  @Post()
  create(@Body() createAccessoryDto: CreateAccessoryDto): Promise<Accessory> {
    return this.accessoriesService.create(createAccessoryDto);
  }

  @Get()
  findAll(): Promise<Accessory[]> {
    return this.accessoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Accessory> {
    return this.accessoriesService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() createAccessoryDto: CreateAccessoryDto,
  ): Promise<Accessory> {
    return this.accessoriesService.update(id, createAccessoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.accessoriesService.remove(id);
  }
}
