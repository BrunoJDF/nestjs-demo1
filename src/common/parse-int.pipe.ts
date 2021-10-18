import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const res = parseInt(value);
    if (isNaN(res)) {
      throw new BadRequestException(value + ' is a not number');
    }
    return res;
  }
}
