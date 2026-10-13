import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { LoanBodyDto, LoanParamsDto, LoanQueryDto } from './dto/loan.dto.js';
import { LoansService } from './loans.service.js';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Post(':principal/installment')
  installment(
    @Param() params: LoanParamsDto,
    @Query() query: LoanQueryDto,
    @Body() body: LoanBodyDto,
  ) {
    return this.loansService.installment(params, query, body);
  }
}
