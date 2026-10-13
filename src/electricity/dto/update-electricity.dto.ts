import { PartialType } from '@nestjs/mapped-types';
import { CreateElectricityDto } from './create-electricity.dto.js';

export class UpdateElectricityDto extends PartialType(CreateElectricityDto) {}
