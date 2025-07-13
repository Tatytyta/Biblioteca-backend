import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Libro } from './libros.entity';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';

@Injectable()
export class LibrosService {
    constructor(
    @InjectRepository(Libro)
    private readonly libroRepository: Repository<Libro>,
  ) {}

  async create(dto: CreateLibroDto): Promise<Libro | null> {
    try {
      const libro = this.libroRepository.create(dto);
      return await this.libroRepository.save(libro);
    } catch (err) {
      console.error('Error creating libro:', err);
      return null;
    }
  }

  async findAll(options: IPaginationOptions, isActive?: boolean): Promise<Pagination<Libro> | null> {
    try {
      const query = this.libroRepository.createQueryBuilder('libro');
      return await paginate<Libro>(query, options);
    } catch (err) {
      console.error('Error retrieving libros:', err);
      return null;
    }
  }

  async findOne(id: number): Promise<Libro | null> {
    try {
      return await this.libroRepository.findOne({ where: { id } });
    } catch (err) {
      console.error('Error finding libro:', err);
      return null;
    }
  }

  async findByTitle(titulo: string): Promise<Libro | null> {
    try {
      return await this.libroRepository.findOne({ where: { titulo } });
    } catch (err) {
      console.error('Error finding libro by titulo:', err);
      return null;
    }
  }

  async update(id: number, dto: UpdateLibroDto): Promise<Libro | null> {
    try {
      const libro = await this.findOne(id);
      if (!libro) return null;

      Object.assign(libro, dto);
      return await this.libroRepository.save(libro);
    } catch (err) {
      console.error('Error updating libro:', err);
      return null;
    }
  }

  async remove(id: number): Promise<Libro | null> {
    try {
      const libro = await this.findOne(id);
      if (!libro) return null;

      return await this.libroRepository.remove(libro);
    } catch (err) {
      console.error('Error deleting libro:', err);
      return null;
    }
  }
}
