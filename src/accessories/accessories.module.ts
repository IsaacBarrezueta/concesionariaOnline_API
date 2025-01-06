import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Accessory, AccessorySchema } from './accessory.schema';
import { AccessoriesService } from './accessories.service';
import { AccessoriesController } from './accessories.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Accessory.name, schema: AccessorySchema },
    ]),
  ],
  providers: [AccessoriesService],
  controllers: [AccessoriesController],
})
export class AccessoriesModule {}
