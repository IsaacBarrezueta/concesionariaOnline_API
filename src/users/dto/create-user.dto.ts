import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { Role } from '../role.enum';

export class CreateUserDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password_hash: string; // La contraseña ya debe estar hasheada

  @IsEnum(Role)
  readonly role: Role;

  @IsString()
  @IsOptional()
  readonly first_name: string;

  @IsString()
  @IsOptional()
  readonly last_name: string;

  @IsString()
  @IsOptional()
  readonly address: string;

  @IsString()
  @IsOptional()
  readonly phone: string;
}
