import { IsString, IsNumber, IsOptional, IsISBN, IsDateString } from 'class-validator';

export class CreateLibroDto {
    @IsString()
    titulo: string;

    @IsString()
    autor: string;

    @IsString()
    @IsISBN()
    ISBN: string;

    @IsNumber()
    generoId: number;

    @IsNumber()
    estanteriaId: number;

    @IsNumber()
    @IsOptional()
    ejemplaresDisponibles?: number = 1;

    @IsDateString()
    @IsOptional()
    fechaPublicacion?: Date;
}