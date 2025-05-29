import { Module } from '@nestjs/common';
import { EstanteriasController } from './estanterias.controller';
import { EstanteriasService } from './estanterias.service';

@Module({
  controllers: [EstanteriasController],
  providers: [EstanteriasService]
})
export class EstanteriasModule {}
