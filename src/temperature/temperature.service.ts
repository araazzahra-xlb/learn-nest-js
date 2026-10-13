import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ok } from '../common/ok.js';
import {
  TemperatureParamsDto,
  TemperatureQueryDto,
} from './dto/temperature.dto.js';

const UNITS = ['C', 'F', 'K'] as const;
type Unit = (typeof UNITS)[number];

function toCelsius(value: number, from: Unit): number {
  if (from === 'C') return value;
  if (from === 'F') return ((value - 32) * 5) / 9;
  return value - 273.15;
}

function fromCelsius(celsius: number, to: Unit): number {
  if (to === 'C') return celsius;
  if (to === 'F') return (celsius * 9) / 5 + 32;
  return celsius + 273.15;
}

@Injectable()
export class TemperatureService {
  convert(params: TemperatureParamsDto, query: TemperatureQueryDto) {
    const { from, to } = query;

    if (!UNITS.includes(from as Unit)) {
      throw new NotFoundException({
        success: false,
        message: `Unit '${from}' is not supported`,
        errors: [],
      });
    }
    if (!UNITS.includes(to as Unit)) {
      throw new NotFoundException({
        success: false,
        message: `Unit '${to}' is not supported`,
        errors: [],
      });
    }
    if (from === to) {
      throw new BadRequestException({
        success: false,
        message: 'Validation failed',
        errors: [
          { field: 'to', message: 'from and to must be different units' },
        ],
      });
    }

    const celsius = toCelsius(params.value, from as Unit);
    const result = Math.round(fromCelsius(celsius, to as Unit) * 100) / 100;

    return ok('Temperature converted', {
      value: params.value,
      from,
      to,
      result,
    });
  }
}
