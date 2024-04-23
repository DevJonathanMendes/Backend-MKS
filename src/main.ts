import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';
import helmet from 'helmet';

import { AppGuard } from './app.guard';
import { AppModule } from './app.module';
import { AppPipeTransform } from './app.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('Documentation')
    .setVersion('1.0.0')
    .setDescription('A movie API')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.useGlobalGuards(new AppGuard());

  app.useGlobalPipes(new AppPipeTransform());
  app.useGlobalPipes(new ValidationPipe());

  app.use(helmet());
  app.use(compression());

  await app.listen(process.env.APP_PORT);
}
bootstrap();
