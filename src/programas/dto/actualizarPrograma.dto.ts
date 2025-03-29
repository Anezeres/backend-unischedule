import { IsString, Length, IsOptional } from 'class-validator';

export class UpdateProgramaDto {
  @IsString()
  @Length(3, 50)
  @IsOptional() 
  nombre?: string;

  @IsString()
  @Length(3, 255)
  @IsOptional()
  descripcion?: string;
}