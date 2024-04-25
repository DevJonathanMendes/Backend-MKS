import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { redisStore } from 'cache-manager-redis-yet';
import { RedisClientOptions } from 'redis';

import { MovieEntity } from './movies/entities/movie.entity';
import { MoviesModule } from './movies/movies.module';

import { UserEntity } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

import { AuthModule } from './auth/auth.module';

import { TypeORMExceptionFilter } from './app.filter';

const SUPABASE_INDIA = {
  type: 'postgres',
  host: 'aws-0-eu-west-1.pooler.supabase.com',
  port: 5432,
  username: 'postgres.uerhunzlodwpyvwaogfm',
  password: 'umasenhaforte',
  database: 'postgres',
  entities: [UserEntity, MovieEntity],
  synchronize: true,
};

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
    CacheModule.register<RedisClientOptions>({
      isGlobal: true,
      ttl: 1000 * 60 * 60,
      store: async () =>
        await redisStore({
          ttl: 1000 * 60 * 60,
          password: process.env.REDIS_PASSWORD,
          socket: {
            host: 'localhost',
            port: Number(process.env.REDIS_PORT_NUMBER),
          },
        }),
    }),
    AuthModule,
    UsersModule,
    MoviesModule,
  ],
  providers: [
    {
      provide: 'APP_FILTER',
      useClass: TypeORMExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
