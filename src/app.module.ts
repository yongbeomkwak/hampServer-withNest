import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig), // TypeORM 설정 파일 연결
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
