import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../../repository/user.repository';
import { User } from '../entity/user.entity';
@Injectable()
export class UserServiceService {}
