import { Injectable } from '@nestjs/common';
import { ok } from '../common/ok.js';
import { ScoresBodyDto } from './dto/scores-body.dto.js';

@Injectable()
export class ScoresService {
  average(body: ScoresBodyDto) {
    const { scores, passMark } = body;
    const count = scores.length;
    const sum = scores.reduce((total, score) => total + score, 0);
    const passed = scores.filter((score) => score >= passMark).length;

    return ok('Score summary calculated', {
      count,
      average: Math.round((sum / count) * 10) / 10,
      highest: Math.max(...scores),
      lowest: Math.min(...scores),
      passMark,
      passed,
      failed: count - passed,
    });
  }
}
