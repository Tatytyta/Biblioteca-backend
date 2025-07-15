import {
  Controller, Get, Post, Put, Delete, Body, Param,
  Query, BadRequestException, NotFoundException,
  UseInterceptors, UploadedFile,
  InternalServerErrorException
} from '@nestjs/common';
import { LibrosService } from './libros.service';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { SuccessResponseDto } from '../common/dto/response.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Libro } from './libros.entity';

@Controller('libros')
export class LibrosController {
  constructor(private readonly LibrosService: LibrosService) { }

  @Post()
  async create(@Body() dto: CreateLibroDto) {
    const Libro = await this.LibrosService.create(dto);
    return new SuccessResponseDto('Libro created successfully', Libro);
  }

  @Get()
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    
  ): Promise<SuccessResponseDto<Pagination<Libro>>> {
    
    const result = await this.LibrosService.findAll({ page, limit });
    if (!result) throw new InternalServerErrorException('Could not retrieve Libros');

    return new SuccessResponseDto('Libros retrieved successfully', result);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const Libro = await this.LibrosService.findOne(id);
    if (!Libro) throw new NotFoundException('Libro not found');
    return new SuccessResponseDto('Libro retrieved successfully', Libro);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateLibroDto) {
    const Libro = await this.LibrosService.update(id, dto);
    if (!Libro) throw new NotFoundException('Libro not found');
    return new SuccessResponseDto('Libro updated successfully', Libro);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const Libro = await this.LibrosService.remove(id);
    if (!Libro) throw new NotFoundException('Libro not found');
    return new SuccessResponseDto('Libro deleted successfully', Libro);
  }
}
