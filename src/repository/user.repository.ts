import { EntityRepository, Repository } from 'typeorm';
import { User } from '../user/entity/user.entity';
import { NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/user/dto/user.dto';
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  //유저 생성
}
