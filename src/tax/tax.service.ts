import { Injectable } from '@nestjs/common';
import { ok } from '../common/ok.js';
import { TaxQueryDto } from './dto/tax-query.dto.js';

@Injectable()
export class TaxService {
  calculate(query: TaxQueryDto) {
    const { amount, rate, inclusive } = query;
    const tax = inclusive
      ? (amount * rate) / (100 + rate)
      : (amount * rate) / 100;
    const net = inclusive ? amount - tax : amount;
    const gross = inclusive ? amount : amount + tax;

    return ok('Tax calculated', {
      amount,
      rate,
      inclusive,
      tax,
      net,
      gross,
    });
  }
}
