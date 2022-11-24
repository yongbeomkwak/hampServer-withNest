import { Module } from '@nestjs/common';
import { UserControllerController } from './user-controller/user-controller.controller';
import { UserServiceService } from './user-service/user-service.service';

@Module({
  controllers: [UserControllerController],
  providers: [UserServiceService]
})
export class UserModule {}
