import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Title: string;

  @Column()
  Year: string;

  @Column()
  Rated: string;

  @Column()
  Released: string;

  @Column()
  Runtime: string;

  @Column()
  Genre: string;

  @Column()
  Director: string;

  @Column()
  Plot: string;

  @Column()
  Language: string;

  @Column('jsonb')
  Ratings: { Source: string; Value: string }[];

  @CreateDateColumn()
  Created: string;

  @UpdateDateColumn()
  Updated: string;
}
