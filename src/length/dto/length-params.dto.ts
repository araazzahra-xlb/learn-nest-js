import { Type } from 'class-transformer';
import { IsNumber, Max, Min } from 'class-validator';

export class LengthParamsDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(1_000_000)
  meters: number;
}
