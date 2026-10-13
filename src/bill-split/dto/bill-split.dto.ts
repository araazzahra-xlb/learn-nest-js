import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Default, Trim } from '../../common/transforms.js';

export class BillItemDto {
  @Trim()
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

export class PeopleParamsDto {
  @Type(() => Number)
  @IsInt()
  @Min(2)
  @Max(20)
  peopleCount: number;
}

export class BillBodyDto {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(30)
  @ValidateNested({ each: true })
  @Type(() => BillItemDto)
  items: BillItemDto[];

  @IsOptional()
  @Default(0)
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(30)
  tipPercent: number = 0;
}
