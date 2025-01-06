import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessoriesModule } from './accessories/accessories.module';
import { CarsModule } from './cars/cars.module'; // Asegúrate de tener el módulo de cars
import { ReplacementsModule } from './replacements/replacements.module'; // Módulo de repuestos
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    AccessoriesModule,
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UsersModule,
    CarsModule,
    AccessoriesModule,
    ReplacementsModule,
  ],
})
export class AppModule {}
