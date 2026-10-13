import { Module } from '@nestjs/common';
import { BillSplitService } from './bill-split.service.js';
import { BillSplitController } from './bill-split.controller.js';

@Module({
  controllers: [BillSplitController],
  providers: [BillSplitService],
})
export class BillSplitModule {}
