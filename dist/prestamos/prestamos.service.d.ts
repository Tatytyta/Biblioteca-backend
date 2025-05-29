import { Repository } from 'typeorm';
import { Prestamo } from './prestamo.entity';
import { CreatePrestamoDto } from './dto/create-prestamos.dto';
export declare class PrestamosService {
    private readonly prestamoRepository;
    constructor(prestamoRepository: Repository<Prestamo>);
    create(createPrestamoDto: CreatePrestamoDto): Promise<Prestamo>;
    findAll(): Promise<Prestamo[]>;
    findOne(id: number): Promise<Prestamo>;
    update(id: number, updatePrestamoDto: any): Promise<Prestamo>;
    remove(id: number): Promise<void>;
}
