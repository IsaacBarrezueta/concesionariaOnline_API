import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password_hash: string;

  @Prop({
    required: true,
    enum: ['cliente', 'administrador', 'superadministrador'],
  })
  role: string; // Asegúrate de tener roles como 'cliente', 'administrador' y 'superadministrador'

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  address: string;

  @Prop()
  phone: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
