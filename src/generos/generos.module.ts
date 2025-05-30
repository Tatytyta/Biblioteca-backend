import { Module } from '@nestjs/common';
import { GenerosController } from './generos.controller';

@Module({
  controllers: [GenerosController],
})
export class GenerosModule {}
