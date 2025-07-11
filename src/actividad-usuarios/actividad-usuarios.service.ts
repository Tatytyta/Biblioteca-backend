import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ActividadUsuario } from './schemas/actividad.schema';
import { Model } from 'mongoose';
import { RegistrarActividadDto } from './dto/registrar-actividad.dto';

@Injectable()
export class ActividadUsuariosService {
  constructor(
    @InjectModel(ActividadUsuario.name) private readonly modelo: Model<ActividadUsuario>,
  ) {}

  async registrar(idUsuario: number, evento: RegistrarActividadDto): Promise<ActividadUsuario | null> {
    try {
      return await this.modelo.findOneAndUpdate(
        { idUsuario },
        { $push: { eventos: evento } },
        { upsert: true, new: true },
      );
    } catch (err) {
      console.error('Error al registrar actividad:', err);
      return null;
    }
  }

  async obtenerTodas(options: { page: number; limit: number }): Promise<any | null> {
    try {
      const { page, limit } = options;
      const actividades = await this.modelo.find()
        .skip((page - 1) * limit)
        .limit(limit);

      return { items: actividades, page, limit };
    } catch (err) {
      console.error('Error al obtener actividades:', err);
      return null;
    }
  }

  async obtenerPorUsuario(idUsuario: number): Promise<ActividadUsuario | null> {
    try {
      return await this.modelo.findOne({ idUsuario });
    } catch (err) {
      console.error('Error al obtener actividad:', err);
      return null;
    }
  }

  async eliminar(id: string): Promise<ActividadUsuario | null> {
    try {
      return await this.modelo.findByIdAndDelete(id);
    } catch (err) {
      console.error('Error al eliminar actividad:', err);
      return null;
    }
  }
}
