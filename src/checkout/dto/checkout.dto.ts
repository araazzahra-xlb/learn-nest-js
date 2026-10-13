import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { ToBoolean } from '../../common/transforms.js';

export class CheckoutQueryDto {
  @ToBoolean(false)
  @IsBoolean()
  member: boolean = false;

  @IsOptional()
  @IsString()
  coupon?: string;
}

export class CheckoutItemDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  price: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  qty: number;
}

export class CheckoutBodyDto {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(20)
  @ValidateNested({ each: true })
  @Type(() => CheckoutItemDto)
  items: CheckoutItemDto[];
}
