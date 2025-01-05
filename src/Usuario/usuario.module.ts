import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioController } from './usuario.controller';
import { UsuariosService } from './usuario.service';

/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Usuario, UsuarioSchema } from './usuario.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }]),
  ],
  controllers: [UsuarioController],
  providers: [UsuariosService],
})
export class UsuarioModule {}
