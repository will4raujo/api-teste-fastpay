import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common'
import { ZodSchema } from 'zod'

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) { }

  transform(value: any, metadata: ArgumentMetadata) {
    try {
      return this.schema.parse(value)
    } catch (error) {
      throw new BadRequestException("Validation failed")
    }
    
    return value
  }
}