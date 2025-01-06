import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { RolesGuard } from '../auth/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('superadministrador') // Solo accesible para superadministradores
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':email')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('email') email: string) {
    return this.usersService.findOneByEmail(email);
  }
}
