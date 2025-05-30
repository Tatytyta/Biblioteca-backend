import { Controller, Post, Get, Body } from '@nestjs/common';

@Controller('generos')
export class GenerosController {
  @Post()
  crear(@Body() datos: any) {
    return {
      mensaje: 'Género creado correctamente',
      data: datos,
    };
  }

  @Get()
  obtenerTodos() {
    return [
      { id: 1, nombre: 'Drama' },
      { id: 2, nombre: 'Comedia' },
    ];
  }
}
