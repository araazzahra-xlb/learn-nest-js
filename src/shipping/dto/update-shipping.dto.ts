import { PartialType } from '@nestjs/mapped-types';
import { CreateShippingDto } from './create-shipping.dto.js';

export class UpdateShippingDto extends PartialType(CreateShippingDto) {}
