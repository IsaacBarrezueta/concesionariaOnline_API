import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async sendMail(
    @Body() body: { to: string; subject: string; text?: string; html?: string },
  ) {
    const { to, subject, text, html } = body;
    await this.mailService.sendMail(to, subject, text, html);
    return { message: 'Correo enviado exitosamente' };
  }
}
