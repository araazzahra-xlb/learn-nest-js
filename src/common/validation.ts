import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common';

function flattenErrors(
  errors: ValidationError[],
  parent = '',
): { field: string; message: string }[] {
  const result: { field: string; message: string }[] = [];

  for (const error of errors) {
    const field = parent ? `${parent}.${error.property}` : error.property;

    if (error.constraints) {
      for (const message of Object.values(error.constraints)) {
        result.push({ field, message });
      }
    }

    if (error.children?.length) {
      result.push(...flattenErrors(error.children, field));
    }
  }

  return result;
}

export function createValidationPipe() {
  return new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
    exceptionFactory: (errors: ValidationError[]) =>
      new BadRequestException({
        success: false,
        message: 'Validation failed',
        errors: flattenErrors(errors),
      }),
  });
}
