import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieEntity } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(MovieEntity)
    private repository: Repository<MovieEntity>,
  ) {}

  create(data: CreateMovieDto): Promise<MovieEntity> {
    data = this.repository.create(data);
    return this.repository.save(data);
  }

  findAll(): Promise<MovieEntity[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<MovieEntity> {
    return this.repository.findOne({ where: { id } });
  }

  update(id: number, data: UpdateMovieDto): Promise<UpdateResult> {
    return this.repository.update({ id }, { ...data });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
