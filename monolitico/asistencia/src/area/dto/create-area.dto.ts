import {IsNotEmpty, IsString, MinLength} from 'class-validator';

export class CreateAreaDto {
@IsNotEmpty()
@IsString()
@MinLength(5)
readonly nombre: string;
@IsNotEmpty()
@IsString()
@MinLength(3)
readonly asistente: string;
}
