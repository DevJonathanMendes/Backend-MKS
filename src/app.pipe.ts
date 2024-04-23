import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class AppPipeTransform implements PipeTransform {
  transform(data: Record<string, any>) {
    const sanitizedData: Record<string, any> = {};

    Object.entries(data).forEach(([key, value]) => {
      sanitizedData[key] = this.sanitizeValue(value);
    });

    return sanitizedData;
  }

  private sanitizeValue(value: string): string {
    if (typeof value === 'string') {
      value = value.replace(/\s{2,}(?![\d\s]*$)/g, ' ').trim();
    }

    return value;
  }
}
