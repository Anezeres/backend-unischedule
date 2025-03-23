import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString, IsIn, Matches } from 'class-validator';
import { CreateHorarioDto } from './create-horario.dto';

export class UpdateHorarioDto extends PartialType(CreateHorarioDto) {
  @IsOptional()
  @IsIn(['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], {
    message: 'El día debe ser un valor válido: Lunes, Martes, Miércoles, Jueves, Viernes, Sábado o Domingo.',
  })
  dia?: string;

  @IsOptional()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, {
    message: 'La hora de inicio debe estar en formato HH:mm:ss (24 horas).',
  })
  hora_inicio?: string;

  @IsOptional()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, {
    message: 'La hora de fin debe estar en formato HH:mm:ss (24 horas).',
  })
  hora_fin?: string;

  @IsOptional()
  @IsString({ message: 'La ubicación debe ser una cadena de texto.' })
  ubicacion?: string;
}
