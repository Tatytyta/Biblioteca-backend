(global as any).crypto = require('crypto');

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3050;
  app.enableCors();
  await app.listen(port);
  console.log(`🚀 Servidor iniciado exitosamente en: http://localhost:${port}`);
}
bootstrap().catch(error => {
  console.error('Error al iniciar el servidor:', error);
  process.exit(1);
});