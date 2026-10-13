import { Controller, Get, Param } from '@nestjs/common';
import { LengthParamsDto } from './dto/length-params.dto.js';
import { LengthService } from './length.service.js';

@Controller('convert/length')
export class LengthController {
  constructor(private readonly lengthService: LengthService) {}

  @Get(':meters')
  convert(@Param() params: LengthParamsDto) {
    return this.lengthService.convert(params);
  }
}
