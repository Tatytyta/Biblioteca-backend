import { Prestamo } from '../prestamos/prestamo.entity';
export declare class Usuario {
    id: number;
    nombre: string;
    email: string;
    password: string;
    role: string;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    prestamos: Prestamo[];
}
