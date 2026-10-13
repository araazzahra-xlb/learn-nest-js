import { Injectable, NotFoundException } from '@nestjs/common';
import { ok } from '../common/ok.js';
import {
  CityParamsDto,
  ShippingBodyDto,
  ShippingQueryDto,
} from './dto/shipping.dto.js';

const CITY_FARE: Record<string, number> = {
  jakarta: 9000,
  bandung: 12000,
  surabaya: 15000,
  medan: 18000,
  denpasar: 20000,
};

function round1(value: number) {
  return Math.round(value * 10) / 10;
}

@Injectable()
export class ShippingService {
  quote(params: CityParamsDto, query: ShippingQueryDto, body: ShippingBodyDto) {
    const city = params.city.toLowerCase();
    const baseFare = CITY_FARE[city];
    if (baseFare === undefined) {
      throw new NotFoundException({
        success: false,
        message: `City '${params.city}' is not supported`,
        errors: [],
      });
    }

    const { lengthCm, widthCm, heightCm } = body.dimension;
    const volumetricKg = round1((lengthCm * widthCm * heightCm) / 5000);
    const chargeableKg = round1(Math.max(body.weightKg, volumetricKg));
    const weightExtra = Math.max(0, Math.ceil(chargeableKg) - 1) * 2000;
    const fare = baseFare + weightExtra;
    const expressFee = query.express ? fare * 0.5 : 0;
    const insuranceFee = query.insurance ? chargeableKg * 1000 : 0;

    return ok('Shipping cost calculated', {
      city,
      express: query.express,
      insurance: query.insurance,
      weightKg: body.weightKg,
      volumetricKg,
      chargeableKg,
      baseFare,
      weightExtra,
      expressFee,
      insuranceFee,
      total: fare + expressFee + insuranceFee,
    });
  }
}
