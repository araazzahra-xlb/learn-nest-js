import { PartialType } from '@nestjs/mapped-types';
import { CreateParkingDto } from './create-parking.dto.js';

export class UpdateParkingDto extends PartialType(CreateParkingDto) {}
