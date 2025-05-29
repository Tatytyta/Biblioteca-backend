import { Libro } from '../libros/libros.entity';
export declare class Estanteria {
    id: number;
    codigo: string;
    ubicacion: string;
    capacidad: number;
    descripcion: string;
    libros: Libro[];
}
