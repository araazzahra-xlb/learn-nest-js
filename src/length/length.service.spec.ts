import { Test, TestingModule } from '@nestjs/testing';
import { LengthService } from './length.service.js';

describe('LengthService', () => {
  let service: LengthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LengthService],
    }).compile();

    service = module.get<LengthService>(LengthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
