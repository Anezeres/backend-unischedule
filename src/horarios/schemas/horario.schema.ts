import { IsEnum, IsNotEmpty, Matches } from 'class-validator';

export class CreateHorarioDto {
  @IsEnum(['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], { message: 'Día inválido' })
  dia: string;

  @Matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, { message: 'Formato de hora inválido' })
  hora_inicio: string;

  @Matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, { message: 'Formato de hora inválido' })
  hora_fin: string;

  @IsNotEmpty({ message: 'Ubicación es obligatoria' })
  ubicacion: string;
}
