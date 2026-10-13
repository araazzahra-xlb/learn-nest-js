import { Body, Controller, Post } from '@nestjs/common';
import { ScoresBodyDto } from './dto/scores-body.dto.js';
import { ScoresService } from './scores.service.js';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @Post('average')
  average(@Body() body: ScoresBodyDto) {
    return this.scoresService.average(body);
  }
}
