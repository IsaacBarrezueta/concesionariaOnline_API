import { CategoriaController } from './categoria.controller';
import { CategoriaService } from './categoria.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Categoria, CategoriaSchema } from './categoria.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Categoria.name, schema: CategoriaSchema },
    ]),
  ],
  controllers: [CategoriaController],
  providers: [CategoriaService],
})
export class CategoriaModule {}
