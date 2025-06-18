import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstanteriasController } from './estanterias.controller';
import { EstanteriasService } from './estanterias.service';
import { Estanteria } from './estanterias.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estanteria])],
  controllers: [EstanteriasController],
  providers: [EstanteriasService],
})
export class EstanteriasModule {}
