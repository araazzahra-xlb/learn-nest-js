import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNumber,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { ToBoolean } from '../../common/transforms.js';

export class CityParamsDto {
  @IsString()
  city: string;
}

export class ShippingQueryDto {
  @ToBoolean(false)
  @IsBoolean()
  express: boolean = false;

  @ToBoolean(false)
  @IsBoolean()
  insurance: boolean = false;
}

export class DimensionDto {
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  lengthCm: number;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  widthCm: number;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  heightCm: number;
}

export class ShippingBodyDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0.1)
  @Max(30)
  weightKg: number;

  @ValidateNested()
  @Type(() => DimensionDto)
  dimension: DimensionDto;
}
