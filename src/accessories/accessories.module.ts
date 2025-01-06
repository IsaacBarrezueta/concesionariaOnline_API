import { AccessoriesController } from './accessories.controller';
import { AccessoriesService } from './accessories.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AccessoriesController],
  providers: [AccessoriesService],
})
export class AccessoriesModule {}
