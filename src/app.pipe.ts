import { Injectable, PipeTransform } from '@nestjs/common';

// É um PipeTransform para remover espaços desnecessários das strings.
// Ex: " Hello  World!  " >> "Hello World!"
@Injectable()
export class AppPipeTransform implements PipeTransform {
  transform(data: Record<string, any>) {
    const sanitizedData: Record<string, any> = {};
    if (typeof data === 'object') {
      Object.entries(data).forEach(([key, value]) => {
        sanitizedData[key] = this.sanitizeValue(value);
      });

      return sanitizedData;
    }

    return data;
  }

  // Função primordial para remover os espaços, ela usa uma Expressão Regular.
  private sanitizeValue(value: string): string {
    const regexp = /\s{2,}(?![\d\s]*$)/g; // Expressão Regular.

    return typeof value === 'string'
      ? value.replace(regexp, ' ').trim()
      : value;
  }
}
