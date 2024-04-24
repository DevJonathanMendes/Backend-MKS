import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMExceptionFilter } from './app.filter';

import { MovieEntity } from './movies/entities/movie.entity';
import { MoviesModule } from './movies/movies.module';

import { UserEntity } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

import { AuthModule } from './auth/auth.module';

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
      entities: [UserEntity, MovieEntity],
      synchronize: true,
    }),
    AuthModule,
    MoviesModule,
    UsersModule,
  ],
  providers: [
    {
      provide: 'APP_FILTER',
      useClass: TypeORMExceptionFilter,
    },
  ],
})
export class AppModule {}
