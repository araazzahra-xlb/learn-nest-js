import { Type } from 'class-transformer';
import {
  IsNumber,
  IsString,
  Max,
  Min,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'differentUnits', async: false })
export class DifferentUnitsConstraint implements ValidatorConstraintInterface {
  validate(_: unknown, args: ValidationArguments) {
    const query = args.object as TemperatureQueryDto;
    if (!query.from || !query.to) return true;
    return query.from !== query.to;
  }

  defaultMessage() {
    return 'from and to must be different units';
  }
}

export class TemperatureParamsDto {
  @Type(() => Number)
  @IsNumber()
  @Min(-273.15)
  @Max(1000)
  value: number;
}

export class TemperatureQueryDto {
  @IsString()
  from: string;

  @IsString()
  @Validate(DifferentUnitsConstraint)
  to: string;
}
