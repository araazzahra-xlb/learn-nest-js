import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNumber,
  IsOptional,
  Max,
  Min,
} from 'class-validator';
import { Default } from '../../common/transforms.js';

export class ScoresBodyDto {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(20)
  @IsNumber({}, { each: true })
  @Min(0, { each: true })
  @Max(100, { each: true })
  @Type(() => Number)
  scores: number[];

  @IsOptional()
  @Default(70)
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(100)
  passMark: number = 70;
}
