import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class MovieEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  Title: string;

  @ApiProperty()
  @Column()
  Year: number;

  @ApiProperty()
  @Column()
  Released: string;

  @ApiProperty()
  @Column()
  Runtime: string;

  @ApiProperty()
  @Column()
  Genre: string;

  @ApiProperty()
  @Column()
  Director: string;

  @ApiProperty()
  @Column()
  IMDb: string;

  @ApiProperty()
  @CreateDateColumn()
  Created: string;

  @ApiProperty()
  @UpdateDateColumn()
  Updated: string;
}
