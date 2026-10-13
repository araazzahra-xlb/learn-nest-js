import { Injectable, NotFoundException } from '@nestjs/common';
import { ok } from '../common/ok.js';
import { ParkingParamsDto, ParkingQueryDto } from './dto/parking.dto.js';

const RATES: Record<string, number> = {
  motorcycle: 2000,
  car: 8000,
  bus: 15000,
};

@Injectable()
export class ParkingService {
  fee(params: ParkingParamsDto, query: ParkingQueryDto) {
    const hourlyRate = RATES[query.vehicle];
    if (hourlyRate === undefined) {
      throw new NotFoundException({
        success: false,
        message: `Vehicle '${query.vehicle}' is not supported`,
        errors: [],
      });
    }

    const billedHours = Math.ceil(params.hours);
    const weekendSurcharge = query.weekend ? 0.2 : 0;
    const total = billedHours * hourlyRate * (query.weekend ? 1.2 : 1);

    return ok('Parking fee calculated', {
      hours: params.hours,
      billedHours,
      vehicle: query.vehicle,
      weekend: query.weekend,
      hourlyRate,
      weekendSurcharge,
      total,
    });
  }
}
