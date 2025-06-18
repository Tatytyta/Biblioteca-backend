import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUserDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
    constructor(
    @InjectRepository(Usuario)
    private readonly userRepo: Repository<Usuario>,
  ) {}

  async create(dto: CreateUsuarioDto): Promise<Usuario | null> {
    try {
      const user = this.userRepo.create(dto);
      return await this.userRepo.save(user);
    } catch (err) {
      console.error('Error creating user:', err);
      return null;
    }
  }

  async findAll(options: IPaginationOptions, isActive?: boolean): Promise<Pagination<Usuario> | null> {
    try {
      const query = this.userRepo.createQueryBuilder('user');
      if (isActive !== undefined) {
        query.where('user.isActive = :isActive', { isActive });
      }
      return await paginate<Usuario>(query, options);
    } catch (err) {
      console.error('Error retrieving users:', err);
      return null;
    }
  }

  async findOne(id: number): Promise<Usuario | null> {
    try {
      return await this.userRepo.findOne({ where: { id } });
    } catch (err) {
      console.error('Error finding user:', err);
      return null;
    }
  }

  async findByNombre(nombre: string): Promise<Usuario | null> {
    try {
      return await this.userRepo.findOne({ where: { nombre } });
    } catch (err) {
      console.error('Error finding user by username:', err);
      return null;
    }
  }

  async update(id: number, dto: UpdateUserDto): Promise<Usuario | null> {
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

  async remove(id: number): Promise<Usuario | null> {
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
