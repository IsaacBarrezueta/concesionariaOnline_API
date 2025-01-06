import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Accessory extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop([String])
  compatible_cars: string[];
}

export const AccessorySchema = SchemaFactory.createForClass(Accessory);
