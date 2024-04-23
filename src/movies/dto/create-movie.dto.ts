import { IsArray, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  Title: string;

  @IsString()
  Year: string;

  @IsString()
  Rated: string;

  @IsString()
  Released: string;

  @IsString()
  Runtime: string;

  @IsString()
  Genre: string;

  @IsString()
  Director: string;

  @IsString()
  Plot: string;

  @IsString()
  Language: string;

  @IsArray()
  Ratings: { Source: string; Value: string }[];
}
