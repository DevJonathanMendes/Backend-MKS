import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  create(data: CreateUserDto): Promise<UserEntity> {
    data = this.repository.create(data);
    return this.repository.save(data);
  }

  findOne(username: string): Promise<UserEntity> {
    return this.repository.findOneBy({ username });
  }
}
