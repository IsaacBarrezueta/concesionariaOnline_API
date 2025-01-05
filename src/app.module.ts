import { MailController } from './Correos/mail.controller';
import { MailService } from './Correos/mail.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CarroController } from './Carro/carro.controller';
import { CategoriaController } from './Categoria/categoria.controller';
import { CategoriaModule } from './Categoria/categoria.module';
import { UsuarioController } from './Usuario/usuario.controller';
import { UsuarioModule } from './Usuario/usuario.module';
import { Usuario, UsuarioSchema } from './Usuario/usuario.schema';
import { UsuariosService } from './Usuario/usuario.service';

@Module({
  imports: [
    CategoriaModule,
    UsuarioModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }]),
  ],
  controllers: [
    MailController,
    CarroController,
    CategoriaController,
    UsuarioController,
  ],
  providers: [MailService, UsuariosService],
})
export class AppModule {}
