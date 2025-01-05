import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Usuario extends Document {
  @Prop({ required: true })
  nombre_completo: string;

  @Prop({ required: true, unique: true })
  correo: string;

  @Prop({ required: true })
  contraseña: string;

  @Prop({ default: false })
  estado: boolean;

  @Prop({
    required: true,
    enum: ['administrador', 'cliente'],
    default: 'cliente',
  })
  rol: string;

  @Prop({ required: false })
  token_verificacion: string; // Token único para verificar la cuenta

  @Prop({ default: Date.now })
  fecha_registro: Date;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
