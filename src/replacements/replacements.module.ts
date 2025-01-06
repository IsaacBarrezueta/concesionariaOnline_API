import { ReplacementsService } from './replacements.service';
import { ReplacementsController } from './replacements.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ReplacementsController],
  providers: [ReplacementsService],
})
export class ReplacementsModule {}
