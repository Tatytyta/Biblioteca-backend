import { Usuario } from '../usuarios//usuario.entity';
import { Libro } from '../libros/libros.entity';
export declare class Prestamo {
    id: number;
    usuario: Usuario;
    libro: Libro;
    fechaPrestamo: Date;
    fechaDevolucionEstimada: Date;
    fechaDevolucionReal: Date;
    estado: string;
}
