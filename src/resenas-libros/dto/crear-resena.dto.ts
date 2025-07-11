import { IsNumber, IsString, IsOptional, Min, Max, IsArray } from 'class-validator';

export class CrearResenaDto {
  @IsNumber()
  idLibro: number;

  @IsNumber()
  idUsuario: number;

  @IsNumber()
  @Min(1)
  @Max(5)
  calificacion: number;

  @IsOptional()
  @IsString()
  comentario?: string;

  @IsOptional()
  @IsArray()
  meGusta?: string[];
}
