import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Response } from 'express';

import { TypeORMError } from 'typeorm';

@Catch(TypeORMError)
export class TypeORMExceptionFilter extends BaseExceptionFilter {
  catch(_: TypeORMError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();

    const statusCode = HttpStatus.BAD_REQUEST;
    res.status(statusCode).json({
      message: [
        'Unknown argument',
        'The data provided is not part of our schema',
      ],
      error: 'Bad Request',
      statusCode,
    });
  }
}
