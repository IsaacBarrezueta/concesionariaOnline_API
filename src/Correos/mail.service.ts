import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false,
      auth: {
        user: 'apikey',
        pass: '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', // Contraseña o contraseña de aplicación
      },
    });
  }

  async sendMail(
    to: string,
    subject: string,
    text?: string,
    html?: string,
  ): Promise<void> {
    const mailOptions = {
      from: 'caisaacbarz@gmail.com',
      to,
      subject,
      text,
      html,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log(`Correo enviado exitosamente a ${to}`);
    } catch (error) {
      console.error('Error al enviar correo:', error);
      throw error;
    }
  }
}
