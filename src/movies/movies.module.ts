import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { DatabaseModule } from '../database/database.module';
import { movieProviders } from './entities/movie.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [MoviesController],
  providers: [...movieProviders, MoviesService],
})
export class MoviesModule {}
