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
    private readonly userRepo: Repository<Libro>,
  ) {}

  async create(dto: CreateLibroDto): Promise<Libro | null> {
    try {
      const user = this.userRepo.create(dto);
      return await this.userRepo.save(user);
    } catch (err) {
      console.error('Error creating user:', err);
      return null;
    }
  }

  async findAll(options: IPaginationOptions, isActive?: boolean): Promise<Pagination<Libro> | null> {
    try {
      const query = this.userRepo.createQueryBuilder('libro');
      if (isActive !== undefined) {
        query.where('user.isActive = :isActive', { isActive });
      }
      return await paginate<Libro>(query, options);
    } catch (err) {
      console.error('Error retrieving users:', err);
      return null;
    }
  }

  async findOne(id: number): Promise<Libro | null> {
    try {
      return await this.userRepo.findOne({ where: { id } });
    } catch (err) {
      console.error('Error finding user:', err);
      return null;
    }
  }

  async findByTitle(titulo: string): Promise<Libro | null> {
    try {
      return await this.userRepo.findOne({ where: { titulo } });
    } catch (err) {
      console.error('Error finding user by titulo:', err);
      return null;
    }
  }

  async update(id: number, dto: UpdateLibroDto): Promise<Libro | null> {
    try {
      const user = await this.findOne(id);
      if (!user) return null;

      Object.assign(user, dto);
      return await this.userRepo.save(user);
    } catch (err) {
      console.error('Error updating user:', err);
      return null;
    }
  }

  async remove(id: number): Promise<Libro | null> {
    try {
      const user = await this.findOne(id);
      if (!user) return null;

      return await this.userRepo.remove(user);
    } catch (err) {
      console.error('Error deleting user:', err);
      return null;
    }
  }
}
