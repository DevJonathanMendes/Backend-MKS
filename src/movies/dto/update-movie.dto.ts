import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Title: string;

  @ApiProperty()
  @IsNumberString()
  Year: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Released: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Runtime: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Genre: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Director: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  IMDb: string;
}
