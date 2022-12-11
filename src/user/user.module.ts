import { Module } from '@nestjs/common';
import { UserController } from './user-controller/user.controller';
import { UserService } from './user-service/user.service';
import {
  TypeOrmModule,
  getRepositoryToken,
  getDataSourceToken,
} from '@nestjs/typeorm';
import { typeORMConfig } from 'src/configs/typeorm.config';
import {
  UserRepository,
  CustomRepositoryMethods,
} from 'src/repository/user.repository';
import { User } from './entity/user.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])], //레포지토리 등록
  controllers: [UserController],
  providers: [
    {
      provide: getRepositoryToken(User),
      inject: [getDataSourceToken()],
      useFactory(dataSource: DataSource) {
        return dataSource.getRepository(User).extend(CustomRepositoryMethods);
      },
    },
    UserService,
  ],
})
export class UserModule {}
