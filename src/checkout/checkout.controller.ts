import { Body, Controller, Post, Query } from '@nestjs/common';
import { CheckoutService } from './checkout.service.js';
import { CheckoutBodyDto, CheckoutQueryDto } from './dto/checkout.dto.js';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post('discount')
  discount(@Query() query: CheckoutQueryDto, @Body() body: CheckoutBodyDto) {
    return this.checkoutService.discount(query, body);
  }
}
