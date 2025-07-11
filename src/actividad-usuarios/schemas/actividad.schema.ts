import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class EventoActividad {
  @Prop({ required: true })
  tipo: string;

  @Prop()
  consulta?: string;

  @Prop()
  idLibro?: number;

  @Prop({ default: Date.now })
  fecha: Date;
}

@Schema({ timestamps: true })
export class ActividadUsuario extends Document {
  @Prop({ required: true })
  idUsuario: number;

  @Prop({ type: [EventoActividad], default: [] })
  eventos: EventoActividad[];
}

export const ActividadUsuarioSchema = SchemaFactory.createForClass(ActividadUsuario);
