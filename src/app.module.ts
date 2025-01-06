import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { AccessoriesModule } from './accessories/accessories.module';
import { AuthModule } from './auth/auth.module';
import { CarsModule } from './cars/cars.module'; // Asegúrate de tener el módulo de cars
import { ReplacementsModule } from './replacements/replacements.module'; // Módulo de repuestos
import { UsersModule } from './users/users.module';

dotenv.config(); // Asegúrate de que dotenv está configurado correctamente

@Module({
  imports: [
    AuthModule,
    AccessoriesModule,
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UsersModule,
    CarsModule,
    AccessoriesModule,
    ReplacementsModule,
    CarsModule,
  ],
})
export class AppModule {}
