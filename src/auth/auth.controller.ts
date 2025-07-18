import {
  Controller,
  Post,
  Body,
  BadRequestException,
  UnauthorizedException
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto';
import { SuccessResponseDto } from '../common/dto/response.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const token = await this.authService.login(loginDto);
    if (!token) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return new SuccessResponseDto('Login successful', { access_token: token });
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUsuarioDto) {
    const token = await this.authService.register(createUserDto);
    if (!token) {
      throw new BadRequestException('Failed to register user');
    }
    return new SuccessResponseDto('Registration successful', { access_token: token });
  }
}
