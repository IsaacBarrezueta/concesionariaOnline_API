/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post, Query } from '@nestjs/common';
import { UsuariosService } from './usuario.service';

@Controller('Usuario')
export class UsuarioController {
  constructor(private readonly usuariosService: UsuariosService) {}
  @Post('registrar')
  async registrar(
    @Body()
    body: {
      nombre_completo: string;
      correo: string;
      contraseña: string;
      rol: string;
    },
  ) {
    return this.usuariosService.registrarUsuario(
      body.nombre_completo,
      body.correo,
      body.contraseña,
      body.rol,
    );
  }

  @Post('verificar')
  async verificar(@Query('token') token: string) {
    return this.usuariosService.verificarUsuario(token);
  }
}
