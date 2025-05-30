import { Controller, Post, Get, Body } from '@nestjs/common';

@Controller('estanterias')
export class EstanteriasController {
  @Post()
  crear(@Body() datos: any) {
    return {
      mensaje: 'Estantería creada correctamente',
      data: datos,
    };
  }

  @Get()
  obtenerTodas() {
    return [
      { id: 1, nombre: 'Estantería A' },
      { id: 2, nombre: 'Estantería B' },
    ];
  }
}
