import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Resena extends Document {
  @Prop({ required: true })
  idLibro: number;

  @Prop({ required: true })
  idUsuario: number;

  @Prop({ required: true, min: 1, max: 5 })
  calificacion: number;

  @Prop()
  comentario: string;

  @Prop({ type: [String], default: [] })
  meGusta: string[];
}

export const ResenaSchema = SchemaFactory.createForClass(Resena);
