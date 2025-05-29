import { Libro } from '../libros/libros.entity';
export declare class Genero {
    id: number;
    nombre: string;
    descripcion: string;
    libros: Libro[];
}
