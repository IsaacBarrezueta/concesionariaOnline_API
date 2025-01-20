import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && (await bcrypt.compare(password, user.password_hash))) {
      // Convertimos el documento Mongoose a un objeto plano
      const userObject = user.toObject();
      // Eliminamos el password_hash del objeto que vamos a devolver
      delete userObject.password_hash;
      return userObject;
    }
    return null;
  }
  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      email: user.email,
      sub: user._id,
      role: user.role, // Incluimos el rol en el payload
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
