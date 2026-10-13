import { Controller, Get, Param, Query } from '@nestjs/common';
import { ParkingParamsDto, ParkingQueryDto } from './dto/parking.dto.js';
import { ParkingService } from './parking.service.js';

@Controller('parking')
export class ParkingController {
  constructor(private readonly parkingService: ParkingService) {}

  @Get(':hours')
  fee(@Param() params: ParkingParamsDto, @Query() query: ParkingQueryDto) {
    return this.parkingService.fee(params, query);
  }
}
