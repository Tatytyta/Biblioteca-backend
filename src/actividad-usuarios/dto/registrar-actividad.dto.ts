import { IsString, IsOptional, IsNumber } from 'class-validator';

export class RegistrarActividadDto {
  @IsString()
  tipo: string;

  @IsOptional()
  @IsString()
  consulta?: string;

  @IsOptional()
  @IsNumber()
  idLibro?: number;
}
