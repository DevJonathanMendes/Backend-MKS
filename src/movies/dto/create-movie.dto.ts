import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateMovieDto {
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
