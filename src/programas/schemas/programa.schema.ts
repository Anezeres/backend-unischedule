import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProgramaDocument = Programa & Document;

@Schema()
export class Programa {
  @Prop({ unique: true, required: true })
  nombre: string;

  @Prop({ required: true })
  descripcion: string;
}

export const ProgramaSchema = SchemaFactory.createForClass(Programa);
