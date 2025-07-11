import { PartialType } from '@nestjs/mapped-types';
import { CrearResenaDto } from './crear-resena.dto';

export class ActualizarResenaDto extends PartialType(CrearResenaDto) {}
