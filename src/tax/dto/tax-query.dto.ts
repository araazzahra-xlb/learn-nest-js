import { Type } from 'class-transformer';
import { IsBoolean, IsNumber, Max, Min } from 'class-validator';
import { ToBoolean } from '../../common/transforms.js';

export class TaxQueryDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  amount: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(100)
  rate: number;

  @ToBoolean(false)
  @IsBoolean()
  inclusive: boolean = false;
}
