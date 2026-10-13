import { Injectable } from '@nestjs/common';
import { ok } from '../common/ok.js';
import { BillBodyDto, PeopleParamsDto } from './dto/bill-split.dto.js';

@Injectable()
export class BillSplitService {
  split(params: PeopleParamsDto, body: BillBodyDto) {
    const subtotal = body.items.reduce(
      (sum, item) => sum + item.price * item.qty,
      0,
    );
    const tip = (subtotal * body.tipPercent) / 100;
    const total = subtotal + tip;

    return ok('Bill split', {
      peopleCount: params.peopleCount,
      subtotal,
      tipPercent: body.tipPercent,
      tip,
      total,
      perPerson: Math.round(total / params.peopleCount),
    });
  }
}
