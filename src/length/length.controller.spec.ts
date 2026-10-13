import { Test, TestingModule } from '@nestjs/testing';
import { LengthController } from './length.controller.js';
import { LengthService } from './length.service.js';

describe('LengthController', () => {
  let controller: LengthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LengthController],
      providers: [LengthService],
    }).compile();

    controller = module.get<LengthController>(LengthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
