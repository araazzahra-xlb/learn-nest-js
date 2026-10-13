import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
  Validate,
  ValidateNested,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Default, Trim } from '../../common/transforms.js';

@ValidatorConstraint({ name: 'currentAbovePrevious', async: false })
export class CurrentAbovePreviousConstraint
  implements ValidatorConstraintInterface
{
  validate(_: unknown, args: ValidationArguments) {
    const meter = args.object as MeterDto;
    if (meter.previousKwh === undefined || meter.currentKwh === undefined) {
      return true;
    }
    return meter.currentKwh > meter.previousKwh;
  }

  defaultMessage() {
    return 'currentKwh must be greater than previousKwh';
  }
}

export class MeterDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  previousKwh: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Validate(CurrentAbovePreviousConstraint)
  currentKwh: number;
}

export class RatesDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  baseFee: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  perKwh: number;

  @IsOptional()
  @Default(11)
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(20)
  taxRate: number = 11;
}

export class ElectricityBodyDto {
  @Trim()
  @IsString()
  @MinLength(3)
  @MaxLength(80)
  customerName: string;

  @ValidateNested()
  @Type(() => MeterDto)
  meter: MeterDto;

  @ValidateNested()
  @Type(() => RatesDto)
  rates: RatesDto;
}
