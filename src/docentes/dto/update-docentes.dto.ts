import {IsOptional, IsString, IsEmail} from 'class-validator';

export class UpdateDocentesDto {
    @IsOptional()
    @IsString()
    name?: string;
  
    @IsOptional()
    @IsEmail()
    email?: string;
  
    @IsOptional()
    @IsString()
    especialidad?: string;
  }