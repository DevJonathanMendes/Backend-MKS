import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { DeleteResult, UpdateResult } from 'typeorm';

import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieEntity } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@ApiBearerAuth()
@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly service: MoviesService) {}

  @ApiCreatedResponse()
  @ApiBadRequestResponse()
  @ApiUnauthorizedResponse()
  @Post()
  create(@Body() data: CreateMovieDto): Promise<MovieEntity> {
    return this.service.create(data);
  }

  @ApiOkResponse()
  @ApiBadRequestResponse()
  @ApiUnauthorizedResponse()
  @Get()
  findAll(): Promise<MovieEntity[]> {
    return this.service.findAll();
  }

  @ApiOkResponse()
  @ApiBadRequestResponse()
  @ApiUnauthorizedResponse()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<MovieEntity> {
    return this.service.findOne(id);
  }

  @ApiCreatedResponse()
  @ApiBadRequestResponse()
  @ApiUnauthorizedResponse()
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateMovieDto,
  ): Promise<UpdateResult> {
    return this.service.update(id, data);
  }

  @ApiOkResponse()
  @ApiBadRequestResponse()
  @ApiUnauthorizedResponse()
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.service.remove(id);
  }
}
