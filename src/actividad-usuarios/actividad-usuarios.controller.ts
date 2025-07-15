import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Body,
  Query,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ActividadUsuariosService } from './actividad-usuarios.service';
import { RegistrarActividadDto } from './dto/registrar-actividad.dto';
import { SuccessResponseDto } from '../common/dto/response.dto';

@Controller('actividad-usuarios')
export class ActividadUsuariosController {
  constructor(private readonly servicio: ActividadUsuariosService) {}

  @Post(':idUsuario')
  async registrar(@Param('idUsuario') idUsuario: number, @Body() dto: RegistrarActividadDto) {
    const actividad = await this.servicio.registrar(idUsuario, dto);
    if (!actividad) throw new InternalServerErrorException('No se pudo registrar la actividad');
    return new SuccessResponseDto('Actividad registrada exitosamente', actividad);
  }

  @Get()
  async obtenerTodas(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<SuccessResponseDto<any>> {
    const result = await this.servicio.obtenerTodas({ page, limit });
    if (!result) throw new InternalServerErrorException('No se pudieron obtener las actividades');
    return new SuccessResponseDto('Actividades obtenidas correctamente', result);
  }

  @Get(':idUsuario')
  async obtenerPorUsuario(@Param('idUsuario') idUsuario: number) {
    const actividad = await this.servicio.obtenerPorUsuario(idUsuario);
    if (!actividad) throw new NotFoundException('Actividad no encontrada');
    return new SuccessResponseDto('Actividad del usuario obtenida', actividad);
  }

  @Delete(':id')
  async eliminar(@Param('id') id: string) {
    const actividad = await this.servicio.eliminar(id);
    if (!actividad) throw new NotFoundException('Actividad no encontrada');
    return new SuccessResponseDto('Actividad eliminada correctamente', actividad);
  }
}
