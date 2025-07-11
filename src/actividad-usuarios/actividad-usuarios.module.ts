import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActividadUsuario, ActividadUsuarioSchema } from './schemas/actividad.schema';
import { ActividadUsuariosService } from './actividad-usuarios.service';
import { ActividadUsuariosController } from './actividad-usuarios.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ActividadUsuario.name, schema: ActividadUsuarioSchema },
    ]),
  ],
  controllers: [ActividadUsuariosController],
  providers: [ActividadUsuariosService],
})
export class ActividadUsuariosModule {}
