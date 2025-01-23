import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Nestjs | REST API Swagger documentation')
  .setDescription('Swagger documentation for the test backend')
  .setVersion('1.0.0')
  .addTag('Test endpoints')
  .build();
