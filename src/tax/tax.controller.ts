import { Controller, Get, Query } from '@nestjs/common';
import { TaxQueryDto } from './dto/tax-query.dto.js';
import { TaxService } from './tax.service.js';

@Controller('tax')
export class TaxController {
  constructor(private readonly taxService: TaxService) {}

  @Get()
  calculate(@Query() query: TaxQueryDto) {
    return this.taxService.calculate(query);
  }
}
