import { Injectable, NotFoundException } from '@nestjs/common';
import { ok } from '../common/ok.js';
import { CheckoutBodyDto, CheckoutQueryDto } from './dto/checkout.dto.js';

const COUPONS: Record<string, number> = {
  HEMAT10: 0.1,
  HEMAT20: 0.2,
  FREESHIP: 0,
};

@Injectable()
export class CheckoutService {
  discount(query: CheckoutQueryDto, body: CheckoutBodyDto) {
    if (query.coupon !== undefined && !(query.coupon in COUPONS)) {
      throw new NotFoundException({
        success: false,
        message: `Coupon '${query.coupon}' is not supported`,
        errors: [],
      });
    }

    const subtotal = body.items.reduce(
      (sum, item) => sum + item.price * item.qty,
      0,
    );
    const memberDiscount = query.member ? Math.round(subtotal * 0.05) : 0;
    const couponRate = query.coupon ? COUPONS[query.coupon] : 0;
    const couponDiscount = Math.round(subtotal * couponRate);
    const discountTotal = memberDiscount + couponDiscount;

    return ok('Checkout calculated', {
      subtotal,
      member: query.member,
      coupon: query.coupon ?? null,
      discounts: {
        member: memberDiscount,
        coupon: couponDiscount,
        total: discountTotal,
      },
      grandTotal: subtotal - discountTotal,
    });
  }
}
