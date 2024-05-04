import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);/*
  app.enableCors({
    origin: ["http://nrex-league.x10.mx"],
    methods: ["GET", "POST"],
    credentials: true
    
  });
*/
  const port = process.env.SERVER_PORT
  await app.listen(port);

}
bootstrap();
