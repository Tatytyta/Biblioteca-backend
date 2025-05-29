import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { CreatePrestamoDto } from './dto/create-prestamos.dto';
import { Prestamo } from './prestamo.entity';

@Controller('prestamos')
export class PrestamosController {
    constructor(private readonly prestamosService: PrestamosService) {}

    @Post()
    create(@Body() createPrestamoDto: CreatePrestamoDto): Promise<Prestamo> {
        return this.prestamosService.create(createPrestamoDto);
    }

    @Get()
    findAll(): Promise<Prestamo[]> {
        return this.prestamosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Prestamo> {
        return this.prestamosService.findOne(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.prestamosService.remove(+id);
    }
}