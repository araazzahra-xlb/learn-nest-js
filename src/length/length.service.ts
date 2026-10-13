import { Injectable } from '@nestjs/common';
import { ok } from '../common/ok.js';
import { LengthParamsDto } from './dto/length-params.dto.js';

@Injectable()
export class LengthService {
  convert(params: LengthParamsDto) {
    const { meters } = params;
    return ok('Length converted', {
      meters,
      kilometers: meters / 1000,
      centimeters: meters * 100,
      miles: Math.round((meters / 1609.344) * 1000) / 1000,
    });
  }
}
