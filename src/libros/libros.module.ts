import { Module } from '@nestjs/common';
import { LibrosController } from './libros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './libros.entity';
import { LibrosService } from './libros.service';

@Module({
  controllers: [LibrosController],
  imports: [TypeOrmModule.forFeature([Libro])],
  providers: [LibrosService],
  exports: [LibrosService],
})
export class LibrosModule {}
