import { IsString, Length } from 'class-validator';

export class ReplaceProgramaDto {
  @IsString()
  @Length(3, 50)
  nombre: string;

  @IsString()
  @Length(3, 255)
  descripcion: string;
}
