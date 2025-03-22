import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Horario, HorarioDocument } from './schemas/horarios.schema';
import { CreateHorarioDto } from './dto/create-horario.dto';

@Injectable()
export class HorariosService {
  constructor(@InjectModel(Horario.name) private horarioModel: Model<HorarioDocument>) {}

  async findAll(): Promise<Horario[]> {
    return this.horarioModel.find().exec();
  }

  async findOne(id: string): Promise<Horario> {
    const horario = await this.horarioModel.findById(id).exec();
    if (!horario) throw new NotFoundException('Horario no encontrado');
    return horario;
  }

  async create(createHorarioDto: CreateHorarioDto): Promise<Horario> {
    const { hora_inicio, hora_fin } = createHorarioDto;
    
    if (hora_inicio >= hora_fin) throw new BadRequestException('La hora de inicio debe ser menor que la de fin');

    const horario = new this.horarioModel(createHorarioDto);
    return horario.save();
  }

  async update(id: string, updateHorarioDto: Partial<CreateHorarioDto>): Promise<Horario> {
    if (updateHorarioDto.hora_inicio && updateHorarioDto.hora_fin && updateHorarioDto.hora_inicio >= updateHorarioDto.hora_fin) {
      throw new BadRequestException('La hora de inicio debe ser menor que la de fin');
    }

    const horario = await this.horarioModel.findByIdAndUpdate(id, updateHorarioDto, { new: true });
    if (!horario) throw new NotFoundException('Horario no encontrado');
    return horario;
  }

  async delete(id: string): Promise<Horario> {
    const horario = await this.horarioModel.findByIdAndDelete(id);
    if (!horario) throw new NotFoundException('Horario no encontrado');
    return horario;
  }
}
