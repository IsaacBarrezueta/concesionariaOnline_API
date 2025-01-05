import * as nodemailer from 'nodemailer';

export async function enviarCorreo(
  correo: string,
  asunto: string,
  mensaje: string,
) {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // O tu proveedor de correo
    auth: {
      user: 'caisaacbarz@gmail.com',
      pass: 'Cibr#E123',
    },
  });

  await transporter.sendMail({
    from: '"Concesionaria" <tu_email@gmail.com>',
    to: correo,
    subject: asunto,
    text: mensaje,
    html: mensaje, // Opcional: contenido HTML
  });
}
