import { Injectable } from '@nestjs/common';
import { ok } from '../common/ok.js';
import { ElectricityBodyDto } from './dto/electricity-body.dto.js';

@Injectable()
export class ElectricityService {
  calculate(body: ElectricityBodyDto) {
    const usageKwh = body.meter.currentKwh - body.meter.previousKwh;
    const usageFee = usageKwh * body.rates.perKwh;
    const subtotal = body.rates.baseFee + usageFee;
    const tax = (subtotal * body.rates.taxRate) / 100;

    return ok('Electricity bill calculated', {
      customerName: body.customerName,
      usageKwh,
      baseFee: body.rates.baseFee,
      usageFee,
      subtotal,
      taxRate: body.rates.taxRate,
      tax,
      total: subtotal + tax,
    });
  }
}
