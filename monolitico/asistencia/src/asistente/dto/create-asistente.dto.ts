import {IsNotEmpty, IsString, MinLength} from 'class-validator';

export class CreateAsistenteDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
   readonly caracteristicas: string;
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
   readonly descripcion: string
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
  readonly soporte: string
}
