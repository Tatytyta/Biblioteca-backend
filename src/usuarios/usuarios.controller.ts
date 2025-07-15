import {
  Controller, Get, Post, Put, Delete, Body, Param,
  Query, BadRequestException, NotFoundException,
  UseInterceptors, UploadedFile,
  InternalServerErrorException
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUserDto } from './dto/update-usuario.dto';
import { SuccessResponseDto } from '../common/dto/response.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Usuario } from './usuario.entity';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usersService: UsuariosService) { }

  @Post()
  async create(@Body() dto: CreateUsuarioDto) {
    const user = await this.usersService.create(dto);
    return new SuccessResponseDto('User created successfully', user);
  }

  @Get()
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('activo') activo?: string,
  ): Promise<SuccessResponseDto<Pagination<Usuario>>> {
    if (activo !== undefined && activo !== 'true' && activo !== 'false') {
      throw new BadRequestException('Invalid value for "activo". Use "true" or "false".');
    }
    const result = await this.usersService.findAll({ page, limit }, activo === 'true');
    if (!result) throw new InternalServerErrorException('Could not retrieve users');

    return new SuccessResponseDto('Users retrieved successfully', result);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const user = await this.usersService.findOne(id);
    if (!user) throw new NotFoundException('User not found');
    return new SuccessResponseDto('User retrieved successfully', user);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateUserDto) {
    const user = await this.usersService.update(id, dto);
    if (!user) throw new NotFoundException('User not found');
    return new SuccessResponseDto('User updated successfully', user);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const user = await this.usersService.remove(id);
    if (!user) throw new NotFoundException('User not found');
    return new SuccessResponseDto('User deleted successfully', user);
  }
}
