import { Body, Controller, Post } from '@nestjs/common';
import { ElectricityBodyDto } from './dto/electricity-body.dto.js';
import { ElectricityService } from './electricity.service.js';

@Controller('bills/electricity')
export class ElectricityController {
  constructor(private readonly electricityService: ElectricityService) {}

  @Post()
  calculate(@Body() body: ElectricityBodyDto) {
    return this.electricityService.calculate(body);
  }
}
