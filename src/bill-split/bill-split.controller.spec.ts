import { Test, TestingModule } from '@nestjs/testing';
import { BillSplitController } from './bill-split.controller.js';
import { BillSplitService } from './bill-split.service.js';

describe('BillSplitController', () => {
  let controller: BillSplitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillSplitController],
      providers: [BillSplitService],
    }).compile();

    controller = module.get<BillSplitController>(BillSplitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
