import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(typeORMConfig), // TypeORM 설정 파일 연결
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
