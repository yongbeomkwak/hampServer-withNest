import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/user/dto/user.dto';
import { DataSource, Repository } from 'typeorm';
import { User } from 'src/user/entity/user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async getTest(): Promise<string> {
    return await 'Hello';
  }
}
