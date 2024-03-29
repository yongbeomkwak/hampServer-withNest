import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConfigProvider } from './configs/typeorm.config';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRootAsync({
      useClass: MysqlConfigProvider
    }), // TypeORM 설정 파일 연결
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
