import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateEstanteriaDto {
    @IsOptional()
    @IsString()
    codigo?: string;

    @IsOptional()
    @IsString()
    ubicacion?: string;

    @IsOptional()
    @IsNumber()
    capacidad?: number;

    @IsOptional()
    @IsString()
    descripcion?: string;
}