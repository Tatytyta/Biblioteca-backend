import { Module } from '@nestjs/common';
import { EstanteriasController } from './estanterias.controller';

@Module({
  controllers: [EstanteriasController],
})
export class EstanteriasModule {}
