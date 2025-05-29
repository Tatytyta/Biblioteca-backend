import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prestamo } from './prestamo.entity';
import { CreatePrestamoDto } from './dto/create-prestamos.dto';

@Injectable()
export class PrestamosService {
    constructor(
        @InjectRepository(Prestamo)
        private prestamoRepository: Repository<Prestamo>
    ) {}

    async create(createPrestamoDto: CreatePrestamoDto): Promise<Prestamo> {
        const prestamo = this.prestamoRepository.create(createPrestamoDto);
        return await this.prestamoRepository.save(prestamo);
    }

    async findAll(): Promise<Prestamo[]> {
        return await this.prestamoRepository.find({
            relations: ['usuario', 'libro']
        });
    }

    async findOne(id: number): Promise<Prestamo> {
        const prestamo = await this.prestamoRepository.findOne({
            where: { id },
            relations: ['usuario', 'libro']
        });
        if (!prestamo) {
            throw new NotFoundException(`Préstamo #${id} no encontrado`);
        }
        return prestamo;
    }
}