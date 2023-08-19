import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions,TypeOrmOptionsFactory } from '@nestjs/typeorm';

// env 셋팅을 읽어오기 위해 프로바이더 사용 
// 사용안하면 환경변수를 불러오기 전에 읽어 재대로된 값을 못가져옴 
@Injectable()
export class MysqlConfigProvider implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql', //Database 설정
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity.{ts,js}'], // Entity 연결
      synchronize: true, //true 값을 설정하면 어플리케이션을 다시 실행할 때 엔티티안에서 수정된 컬럼의 길이 타입 변경값등을 해당 테이블을 Drop한 후 다시 생성해준다.
      logging: true,
    };
  }
}
