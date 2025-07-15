import { Controller, Post, Get, Body, Query, BadRequestException,InternalServerErrorException } from '@nestjs/common';
import { CreateEstanteriaDto } from './dto/create-estanterias.dto';
import { SuccessResponseDto } from '../common/dto/response.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Estanteria } from './estanterias.entity';
import { EstanteriasService } from './estanterias.service';

@Controller('estanterias')
export class EstanteriasController {
  constructor(private readonly usersService: EstanteriasService) { }
  @Post()
  async create(@Body() dto: CreateEstanteriaDto) {
    const user = await this.usersService.create(dto);
    return new SuccessResponseDto('User created successfully', user);
  }

  @Get()
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('isActive') isActive?: string,
  ): Promise<SuccessResponseDto<Pagination<Estanteria>>> {
    if (isActive !== undefined && isActive !== 'true' && isActive !== 'false') {
      throw new BadRequestException('Invalid value for "isActive". Use "true" or "false".');
    }
    const result = await this.usersService.findAll({ page, limit }, isActive === 'true');
    if (!result) throw new InternalServerErrorException('Could not retrieve users');

    return new SuccessResponseDto('Users retrieved successfully', result);
  }
}
