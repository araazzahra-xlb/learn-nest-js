import { PartialType } from '@nestjs/mapped-types';
import { CreateLengthDto } from './create-length.dto.js';

export class UpdateLengthDto extends PartialType(CreateLengthDto) {}
