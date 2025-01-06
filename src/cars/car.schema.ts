import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Car extends Document {
  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  car_model: string; // Cambiado de 'model' a 'car_model'

  @Prop({ required: true })
  year: number;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  stock: number;

  @Prop([String])
  available_colors: string[];

  @Prop([String])
  features: string[];

  @Prop()
  images: { color: string; url: string }[];
}

export const CarSchema = SchemaFactory.createForClass(Car);
