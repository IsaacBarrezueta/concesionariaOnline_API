import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Categoria extends Document {
  @Prop()
  _id: string;

  @Prop({ required: true })
  Nombre: string;

  @Prop()
  Estado: string;
}

export const CategoriaSchema = SchemaFactory.createForClass(Categoria);
