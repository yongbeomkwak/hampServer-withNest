import { NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/user/dto/user.dto';
import { Repository } from 'typeorm';
import { User } from 'src/user/entity/user.entity';

export interface UserRepository extends Repository<User> {
  // Orm 0.3x 이후로 이런식으로 바뀜
  this: Repository<User>;

  getTest(): Promise<string>;
}

type CustomRepository = Pick<UserRepository, 'getTest'>;

export const CustomRepositoryMethods: CustomRepository = {
  async getTest(): Promise<string> {
    return 'Hello';
  },
};
