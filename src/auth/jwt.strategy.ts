import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secretKey', // Cambia esta clave por una más segura
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}
