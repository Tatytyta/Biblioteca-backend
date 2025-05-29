import { PrestamosService } from './prestamos.service';
import { CreatePrestamoDto } from './dto/create-prestamos.dto';
import { Prestamo } from './prestamo.entity';
export declare class PrestamosController {
    private readonly prestamosService;
    constructor(prestamosService: PrestamosService);
    create(createPrestamoDto: CreatePrestamoDto): Promise<Prestamo>;
    findAll(): Promise<Prestamo[]>;
    findOne(id: string): Promise<Prestamo>;
    remove(id: string): Promise<void>;
}
