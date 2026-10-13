import { Module } from '@nestjs/common';
import { LengthService } from './length.service.js';
import { LengthController } from './length.controller.js';

@Module({
  controllers: [LengthController],
  providers: [LengthService],
})
export class LengthModule {}
