import { IsString, IsNumber, IsOptional, IsISBN, IsDateString } from 'class-validator';

export class UpdateLibroDto {
    @IsOptional()
    @IsString()
    titulo?: string;

    @IsOptional()
    @IsString()
    autor?: string;

    @IsOptional()
    @IsString()
    @IsISBN()
    ISBN?: string;

    @IsOptional()
    @IsNumber()
    generoId?: number;

    @IsOptional()
    @IsNumber()
    estanteriaId?: number;

    @IsOptional()
    @IsNumber()
    ejemplaresDisponibles?: number;

    @IsOptional()
    @IsDateString()
    fechaPublicacion?: Date;
}