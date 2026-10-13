import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import {
  CityParamsDto,
  ShippingBodyDto,
  ShippingQueryDto,
} from './dto/shipping.dto.js';
import { ShippingService } from './shipping.service.js';

@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Post(':city')
  quote(
    @Param() params: CityParamsDto,
    @Query() query: ShippingQueryDto,
    @Body() body: ShippingBodyDto,
  ) {
    return this.shippingService.quote(params, query, body);
  }
}
