import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../../repository/user.repository';
import { User } from '../entity/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private UserRepository: UserRepository,
  ) //  UserService 계층에서 Repository에 접근이 가능합니다.
  {}
}
