import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMExceptionFilter } from './app.filter';

import { MovieEntity } from './movies/entities/movie.entity';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [MovieEntity],
      synchronize: true,
    }),

    MoviesModule,
  ],
  providers: [
    {
      provide: 'APP_FILTER',
      useClass: TypeORMExceptionFilter,
    },
  ],
})
export class AppModule {}
