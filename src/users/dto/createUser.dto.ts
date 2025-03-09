import { IsString, IsEmail, IsBoolean, IsEnum, MinLength, Matches } from 'class-validator';

enum PlanType {
  Free = 'Free',
  Premium = 'Premium'
}

export class CreateUserDto {
  @IsString()
  @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, { message: 'El nombre solo puede contener letras y espacios' })
  name: string;

  @IsString()
  @Matches(/^[a-zA-Z0-9_]+$/, { message: 'El nombre de usuario solo puede contener letras, números y guiones bajos' })
  username: string;

  @IsEmail({}, { message: 'Debe proporcionar un correo electrónico válido' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  password: string;


  @IsBoolean()
  isadmin: boolean;

  @IsEnum(PlanType, { message: 'El tipo de plan debe ser uno de los valores permitidos: Free, Premium, Enterprise' })
  plan_type: PlanType;
}
