import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HorariosService } from './horarios.service';
import { HorariosController } from './horarios.controller';
import { Horario, HorarioSchema } from './schemas/horario.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Horario.name, schema: HorarioSchema }])],
  controllers: [HorariosController],
  providers: [HorariosService],
})
export class HorariosModule {}