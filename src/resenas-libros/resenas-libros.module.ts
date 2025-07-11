import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Resena, ResenaSchema } from './schemas/resena.schema';
import { ResenasLibrosService } from './resenas-libros.service';
import { ResenasLibrosController } from './resenas-libros.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Resena.name, schema: ResenaSchema },
    ]),
  ],
  controllers: [ResenasLibrosController],
  providers: [ResenasLibrosService],
})
export class ResenasLibrosModule {}
