import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import * as nodemailer from 'nodemailer';
import { v4 as uuidv4 } from 'uuid';
import { Usuario } from './usuario.schema';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name) private readonly usuarioModel: Model<Usuario>,
  ) {}

  async registrarUsuario(
    nombre_completo: string,
    correo: string,
    contraseña: string,
    rol: string,
  ) {
    // Verificar si el correo ya está registrado
    const usuarioExistente = await this.usuarioModel.findOne({ correo });
    if (usuarioExistente) {
      throw new BadRequestException('El correo ya está registrado');
    }

    // Hashear la contraseña
    const contraseñaHash = await bcrypt.hash(contraseña, 10);

    // Generar un token de verificación único
    const tokenVerificacion = uuidv4();

    // Crear el usuario con estado inicial false
    const nuevoUsuario = new this.usuarioModel({
      nombre_completo,
      correo,
      contraseña: contraseñaHash,
      estado: false,
      rol,
      token_verificacion: tokenVerificacion,
    });

    await nuevoUsuario.save();

    // Enviar correo de verificación
    await this.enviarCorreoVerificacion(correo, tokenVerificacion);

    return {
      mensaje: 'Usuario registrado. Revisa tu correo para verificar tu cuenta.',
    };
  }

  async enviarCorreoVerificacion(correo: string, token: string) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false,
      auth: {
        user: 'apikey',
        pass: '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', // Contraseña o contraseña de aplicación
      },
    });

    const enlace = `http://localhost:3000/usuario/verificar?token=${token}`;
    const mensaje = `
      <h1>Verifica tu cuenta</h1>
      <p>Haz clic en el siguiente enlace para verificar tu cuenta:</p>
      <a href="${enlace}">Verificar</a>
    `;

    await transporter.sendMail({
      from: 'caisaacbarz@gmail.com',
      to: correo,
      subject: 'Verifica tu cuenta',
      html: mensaje,
    });
  }

  async verificarUsuario(token: string) {
    const usuario = await this.usuarioModel.findOne({
      token_verificacion: token,
    });

    if (!usuario) {
      throw new BadRequestException(
        'Token de verificación inválido o expirado',
      );
    }

    usuario.estado = true;
    usuario.token_verificacion = null;
    await usuario.save();

    return {
      mensaje: 'Usuario verificado con éxito. Ahora puedes iniciar sesión.',
    };
  }
}
