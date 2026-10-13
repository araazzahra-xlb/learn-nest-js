import { Type } from 'class-transformer';
import { IsIn, IsInt, IsNumber, IsOptional, Max, Min } from 'class-validator';
import { Default } from '../../common/transforms.js';

export class LoanParamsDto {
  @Type(() => Number)
  @IsNumber()
  @Min(1_000_000)
  @Max(1_000_000_000)
  principal: number;
}

export class LoanQueryDto {
  @IsOptional()
  @Default('IDR')
  @IsIn(['IDR', 'USD'])
  currency: string = 'IDR';
}

export class LoanBodyDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(60)
  months: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(50)
  annualInterestRate: number;
}
