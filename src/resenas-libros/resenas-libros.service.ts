import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resena } from './schemas/resena.schema';
import { CrearResenaDto } from './dto/crear-resena.dto';
import { ActualizarResenaDto } from './dto/actualizar-resena.dto';

@Injectable()
export class ResenasLibrosService {
  constructor(
    @InjectModel(Resena.name) private readonly modelo: Model<Resena>,
  ) {}

  async create(dto: CrearResenaDto): Promise<Resena | null> {
    try {
      return await this.modelo.create(dto);
    } catch (err) {
      console.error('Error al crear reseña:', err);
      return null;
    }
  }

  async findAll(options: { page: number, limit: number }): Promise<any | null> {
    try {
      const { page, limit } = options;
      const reseñas = await this.modelo.find()
        .skip((page - 1) * limit)
        .limit(limit);

      return { items: reseñas, page, limit };
    } catch (err) {
      console.error('Error al obtener reseñas:', err);
      return null;
    }
  }

  async findOne(id: string): Promise<Resena | null> {
    try {
      return await this.modelo.findById(id);
    } catch (err) {
      console.error('Error al buscar reseña:', err);
      return null;
    }
  }

  async update(id: string, dto: ActualizarResenaDto): Promise<Resena | null> {
    try {
      return await this.modelo.findByIdAndUpdate(id, dto, { new: true });
    } catch (err) {
      console.error('Error al actualizar reseña:', err);
      return null;
    }
  }

  async remove(id: string): Promise<Resena | null> {
    try {
      return await this.modelo.findByIdAndDelete(id);
    } catch (err) {
      console.error('Error al eliminar reseña:', err);
      return null;
    }
  }
}
