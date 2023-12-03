import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 
export type AreaDocument = Area & Document;

@Schema()
export class Area {
@Prop()
nombre: string;

@Prop()
asistente: string;

}


export const AreaSchema = SchemaFactory.createForClass(Area);