import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateEstanteriaDto {
    @IsString()
    codigo: string;

    @IsString()
    ubicacion: string;

    @IsNumber()
    capacidad: number;

    @IsString()
    @IsOptional()
    descripcion?: string;
}