import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 
export type AsistenteDocument = Asistente & Document;

@Schema()
export class Asistente {
@Prop()
caracteristicas: string;
@Prop()
descripcion: string;
@Prop()
soporte: string;
}


export const AsistenteSchema = SchemaFactory.createForClass(Asistente);


