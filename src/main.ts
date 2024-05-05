import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });


  const port = process.env.SERVER_PORT
  await app.listen(port);

}
bootstrap();
