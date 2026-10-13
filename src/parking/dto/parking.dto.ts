import { Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsString, Max, Min } from 'class-validator';
import { ToBoolean } from '../../common/transforms.js';

export class ParkingParamsDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0.5)
  @Max(24)
  hours: number;
}

export class ParkingQueryDto {
  @IsString()
  vehicle: string;

  @ToBoolean(false)
  @IsBoolean()
  weekend: boolean = false;
}
