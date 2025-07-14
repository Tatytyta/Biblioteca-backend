import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3000; // 👈 ¡esto es obligatorio en Render!
  await app.listen(port);

  console.log(`Servidor escuchando en el puerto ${port}`);
}
bootstrap();
