import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Libro } from '../libros/libros.entity';

@Entity('estanterias')
export class Estanteria {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    codigo: string;

    @Column()
    ubicacion: string;

    @Column()
    capacidad: number;

    @Column({ nullable: true })
    descripcion: string;

    @OneToMany(() => Libro, libro => libro.estanteria)
    libros: Libro[];
}