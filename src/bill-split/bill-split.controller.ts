import { Body, Controller, Param, Post } from '@nestjs/common';
import { BillSplitService } from './bill-split.service.js';
import { BillBodyDto, PeopleParamsDto } from './dto/bill-split.dto.js';

@Controller('bills')
export class BillSplitController {
  constructor(private readonly billSplitService: BillSplitService) {}

  @Post(':peopleCount/split')
  split(@Param() params: PeopleParamsDto, @Body() body: BillBodyDto) {
    return this.billSplitService.split(params, body);
  }
}
