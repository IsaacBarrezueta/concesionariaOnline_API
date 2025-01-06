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

  // Crear un accesorio
  @Post()
  create(@Body() createAccessoryDto: CreateAccessoryDto): Promise<Accessory> {
    return this.accessoriesService.create(createAccessoryDto);
  }

  // Obtener todos los accesorios
  @Get()
  findAll(): Promise<Accessory[]> {
    return this.accessoriesService.findAll();
  }

  // Obtener un accesorio por ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Accessory> {
    return this.accessoriesService.findOne(id);
  }

  // Actualizar un accesorio
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() createAccessoryDto: CreateAccessoryDto,
  ): Promise<Accessory> {
    return this.accessoriesService.update(id, createAccessoryDto);
  }

  // Eliminar un accesorio
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.accessoriesService.remove(id);
  }
}
