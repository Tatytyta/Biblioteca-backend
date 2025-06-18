import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { UpdateEstanteriaDto } from './dto/update-estanteria.dto';
import { CreateEstanteriaDto } from './dto/create-estanterias.dto';
import { Estanteria } from './estanterias.entity';

@Injectable()
export class EstanteriasService {
    constructor(
    @InjectRepository(Estanteria)
    private readonly userRepo: Repository<Estanteria>,
  ) {}

  async create(dto: CreateEstanteriaDto): Promise<Estanteria | null> {
    try {
      const user = this.userRepo.create(dto);
      return await this.userRepo.save(user);
    } catch (err) {
      console.error('Error creating user:', err);
      return null;
    }
  }

  async findAll(options: IPaginationOptions, isActive?: boolean): Promise<Pagination<Estanteria> | null> {
    try {
      const query = this.userRepo.createQueryBuilder('user');
      if (isActive !== undefined) {
        query.where('user.isActive = :isActive', { isActive });
      }
      return await paginate<Estanteria>(query, options);
    } catch (err) {
      console.error('Error retrieving users:', err);
      return null;
    }
  }

  async findOne(id: number): Promise<Estanteria | null> {
    try {
      return await this.userRepo.findOne({ where: { id } });
    } catch (err) {
      console.error('Error finding user:', err);
      return null;
    }
  }
   async update(id: number, dto: UpdateEstanteriaDto): Promise<Estanteria | null> {
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

  async remove(id: number): Promise<Estanteria | null> {
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
