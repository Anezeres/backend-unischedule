import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
import { HorariosService } from './horarios.service';
import { CreateHorarioDto } from './dto/create-horario.dto';

@Controller('horarios')
export class HorariosController {
  constructor(private readonly horariosService: HorariosService) {}

  @Get()
  async findAll() {
    return this.horariosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.horariosService.findOne(id);
  }

  @Post()
  async create(@Body() createHorarioDto: CreateHorarioDto) {
    return this.horariosService.create(createHorarioDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateHorarioDto: CreateHorarioDto) {
    return this.horariosService.update(id, updateHorarioDto);
  }

  @Patch(':id')
  async partialUpdate(@Param('id') id: string, @Body() updateHorarioDto: Partial<CreateHorarioDto>) {
    return this.horariosService.update(id, updateHorarioDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.horariosService.delete(id);
  }
}
