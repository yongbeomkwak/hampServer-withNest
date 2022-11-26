import { Module } from '@nestjs/common';
import { UserController } from './user-controller/user.controller';
import { UserService } from './user-service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from 'src/configs/typeorm.config';
import { UserRepository } from 'src/repository/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])], //레포지토리 등록
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
