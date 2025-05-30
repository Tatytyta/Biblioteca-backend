import { Module } from '@nestjs/common';
import { LibrosController } from './libros.controller';

@Module({
  controllers: [LibrosController],
})
export class LibrosModule {}
