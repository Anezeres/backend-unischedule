import { IsString, IsEmail, IsBoolean, IsEnum, MinLength, Matches, IsOptional } from 'class-validator';

enum PlanType {
  Free = 'Free',
  Premium = 'Premium'
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, { message: 'El nombre solo puede contener letras y espacios' })
  name?: string;

  @IsOptional()
  @IsString()
  @Matches(/^[a-zA-Z0-9_]+$/, { message: 'El nombre de usuario solo puede contener letras, números y guiones bajos' })
  username?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Debe proporcionar un correo electrónico válido' })
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  password?: string;

  @IsOptional()
  @IsBoolean()
  isadmin?: boolean;

  @IsOptional()
  @IsEnum(PlanType, { message: 'El tipo de plan debe ser uno de los valores permitidos: Free, Premium, Enterprise' })
  plan_type?: PlanType;
}
