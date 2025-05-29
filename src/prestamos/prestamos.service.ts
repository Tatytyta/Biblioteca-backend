import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prestamo } from './prestamo.entity';
import { CreatePrestamoDto } from './dto/create-prestamos.dto';

@Injectable()
export class PrestamosService {
    constructor(
        @InjectRepository(Prestamo)
        private readonly prestamoRepository: Repository<Prestamo>
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
            throw new NotFoundException(`Préstamo con ID ${id} no encontrado`);
        }

        return prestamo;
    }

    async update(id: number, updatePrestamoDto: any): Promise<Prestamo> {
        const prestamo = await this.findOne(id);
        const prestamoActualizado = Object.assign(prestamo, updatePrestamoDto);
        return await this.prestamoRepository.save(prestamoActualizado);
    }

    async remove(id: number): Promise<void> {
        const prestamo = await this.findOne(id);
        await this.prestamoRepository.remove(prestamo);
    }
}