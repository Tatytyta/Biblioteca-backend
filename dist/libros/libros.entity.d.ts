import { Genero } from '../generos/genero.entity';
import { Estanteria } from '../estanterias/estanterias.entity';
import { Prestamo } from '../prestamos/prestamo.entity';
export declare class Libro {
    id: number;
    titulo: string;
    autor: string;
    ISBN: string;
    genero: Genero;
    estanteria: Estanteria;
    ejemplaresDisponibles: number;
    fechaPublicacion: Date;
    prestamos: Prestamo[];
}
