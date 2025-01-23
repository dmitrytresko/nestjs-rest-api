import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './swagger/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerDocumentation = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/api/documentation', app, swaggerDocumentation);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
