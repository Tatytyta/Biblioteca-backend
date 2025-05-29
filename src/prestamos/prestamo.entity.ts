import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Usuario } from '../usuarios//usuario.entity';
import { Libro } from '../libros/libros.entity';

@Entity('prestamos')
export class Prestamo {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Usuario, usuario => usuario.prestamos)
    usuario: Usuario;

    @ManyToOne(() => Libro, libro => libro.prestamos)
    libro: Libro;

    @CreateDateColumn()
    fechaPrestamo: Date;

    @Column()
    fechaDevolucionEstimada: Date;

    @Column({ nullable: true })
    fechaDevolucionReal: Date;

    @Column({ default: 'activo' })
    estado: string;
}