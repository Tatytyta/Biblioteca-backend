import { Injectable } from '@nestjs/common';
import { UpdateEstanteriaDto } from './dto/update-estanteria.dto';
import { CreateEstanteriaDto } from './dto/create-estanterias.dto';

@Injectable()
export class EstanteriasService {
    create(createEstanteriaDto: CreateEstanteriaDto) {
        throw new Error('Method not implemented.');
    }
    findAll() {
        throw new Error('Method not implemented.');
    }
    findOne(arg0: number) {
        throw new Error('Method not implemented.');
    }
    update(arg0: number, updateEstanteriaDto: UpdateEstanteriaDto) {
        throw new Error('Method not implemented.');
    }
    remove(arg0: number) {
        throw new Error('Method not implemented.');
    }
}
