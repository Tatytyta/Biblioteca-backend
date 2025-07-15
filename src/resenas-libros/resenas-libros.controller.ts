import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ResenasLibrosService } from './resenas-libros.service';
import { CrearResenaDto } from './dto/crear-resena.dto';
import { ActualizarResenaDto } from './dto/actualizar-resena.dto';
import { SuccessResponseDto } from '../common/dto/response.dto';

@Controller('resenas-libros')
export class ResenasLibrosController {
  constructor(private readonly resenasService: ResenasLibrosService) {}

  @Post()
  async create(@Body() dto: CrearResenaDto) {
    const resena = await this.resenasService.create(dto);
    if (!resena) throw new InternalServerErrorException('No se pudo crear la reseña');
    return new SuccessResponseDto('Reseña creada exitosamente', resena);
  }

  @Get()
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<SuccessResponseDto<any>> {
    const result = await this.resenasService.findAll({ page, limit });
    if (!result) throw new InternalServerErrorException('No se pudieron obtener las reseñas');
    return new SuccessResponseDto('Reseñas obtenidas correctamente', result);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const resena = await this.resenasService.findOne(id);
    if (!resena) throw new NotFoundException('Reseña no encontrada');
    return new SuccessResponseDto('Reseña obtenida correctamente', resena);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: ActualizarResenaDto) {
    const resena = await this.resenasService.update(id, dto);
    if (!resena) throw new NotFoundException('Reseña no encontrada');
    return new SuccessResponseDto('Reseña actualizada correctamente', resena);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const resena = await this.resenasService.remove(id);
    if (!resena) throw new NotFoundException('Reseña no encontrada');
    return new SuccessResponseDto('Reseña eliminada correctamente', resena);
  }
}
