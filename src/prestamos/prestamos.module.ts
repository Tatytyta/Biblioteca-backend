import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrestamosController } from './prestamos.controller';
import { PrestamosService } from './prestamos.service';
import { Prestamo } from './prestamo.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Prestamo])],
    controllers: [PrestamosController],
    providers: [PrestamosService],
    exports: [PrestamosService]
})
export class PrestamosModule {}