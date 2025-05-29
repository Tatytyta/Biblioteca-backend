import { IsNumber, IsDateString, IsOptional } from 'class-validator';

export class CreatePrestamoDto {
    @IsNumber()
    usuarioId: number;

    @IsNumber()
    libroId: number;

    @IsDateString()
    fechaDevolucionEstimada: Date;

    @IsOptional()
    @IsDateString()
    fechaDevolucionReal?: Date;
}