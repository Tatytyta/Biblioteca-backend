export declare class CreateLibroDto {
    titulo: string;
    autor: string;
    ISBN: string;
    generoId: number;
    estanteriaId: number;
    ejemplaresDisponibles?: number;
    fechaPublicacion?: Date;
}
