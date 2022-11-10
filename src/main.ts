import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* 
  스웨거 설정

  */

  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
