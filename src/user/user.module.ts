import { Module } from '@nestjs/common';
import { UserController } from './user-controller/user.controller';
import { UserService } from './user-service/user.service';
import { User } from './entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../repository/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
