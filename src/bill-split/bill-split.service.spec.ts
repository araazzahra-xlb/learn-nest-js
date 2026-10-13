import { Test, TestingModule } from '@nestjs/testing';
import { BillSplitService } from './bill-split.service.js';

describe('BillSplitService', () => {
  let service: BillSplitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillSplitService],
    }).compile();

    service = module.get<BillSplitService>(BillSplitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
