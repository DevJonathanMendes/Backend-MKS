import { DataSource } from 'typeorm';
import { Movie } from './movie.entity';

export const movieProviders = [
  {
    provide: 'MOVIE_REPOSITORY',
    inject: ['DATA_SOURCE'],
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Movie),
  },
];
