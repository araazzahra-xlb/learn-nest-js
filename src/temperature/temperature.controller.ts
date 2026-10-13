import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  TemperatureParamsDto,
  TemperatureQueryDto,
} from './dto/temperature.dto.js';
import { TemperatureService } from './temperature.service.js';

@Controller('convert/temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}

  @Get(':value')
  convert(
    @Param() params: TemperatureParamsDto,
    @Query() query: TemperatureQueryDto,
  ) {
    return this.temperatureService.convert(params, query);
  }
}
