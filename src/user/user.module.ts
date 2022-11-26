import { Module } from '@nestjs/common';
import { UserControllerController } from './user-controller/user-controller.controller';
import { UserServiceService } from './user-service/user-service.service';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [UserControllerController],
  providers: [UserServiceService],
})
export class UserModule {}
