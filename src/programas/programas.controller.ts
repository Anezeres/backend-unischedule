import { Controller, Get, Post, Body, Put, Patch, Param, Delete, UsePipes, ValidationPipe, HttpException } from '@nestjs/common';
import { ProgramasService } from './programas.service';
import { CreateProgramaDto } from './dto/programa.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { NotFoundException } from '@nestjs/common';
import { UpdateProgramaDto } from './dto/actualizarPrograma.dto';
import { ReplaceProgramaDto } from './dto/reemplazarPrograma.dto';

@ApiTags('Programas Académicos')
@Controller('programas')
export class ProgramasController {
  constructor(private readonly programasService: ProgramasService) {}

  /*
  @Get()
  @ApiResponse({ status: 200, description: 'Lista de programas académicos obtenida correctamente' })
  findAll() {
    return this.programasService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Programa académico encontrado' })
  findOne(@Param('id') id: string) {
    return this.programasService.findOne(id);
  }
    */

  @Post()
  @ApiResponse({ status: 201, description: 'Programa académico creado exitosamente' })
  createPrograma(@Body() createProgramaDto: CreateProgramaDto) {
    console.log(createProgramaDto)
    return this.programasService.createPrograma(createProgramaDto)
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de programas académicos obtenida correctamente' })
  getUsers() {
    return this.programasService.getProgramas();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Programa académico encontrado' })
  async getUnPrograma(@Param('id') id: string) {
    const findPrograma = await this.programasService.getUnPrograma(id)
    if (!findPrograma) throw new HttpException('Programa No Encontrado', 404);
    return findPrograma;
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updatePrograma(@Param('id') id: string, @Body() updateProgramaDto: UpdateProgramaDto) {
    const programaActualizado = await this.programasService.update(id, updateProgramaDto);
    if (!programaActualizado) {
      throw new NotFoundException(`Programa con ID ${id} no encontrado`);
    }
    return programaActualizado;
  }

  
  @Put(':id')
  async replacePrograma(@Param('id') id: string, @Body() replaceProgramaDto: ReplaceProgramaDto) {
    const programaActualizado = await this.programasService.replace(id, replaceProgramaDto);
    if (!programaActualizado) {
      throw new NotFoundException(`Programa con ID ${id} no encontrado`);
    }
    return programaActualizado;
  }

  @Delete(':id')
  async deletePrograma(@Param('id') id: string) {
    const resultado = await this.programasService.delete(id);
    if (!resultado) {
      throw new NotFoundException(`Programa con ID ${id} no encontrado`);
    }
    return { message: `Programa con ID ${id} eliminado correctamente` };
  }

  /*
  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  @ApiResponse({ status: 200, description: 'Programa académico actualizado exitosamente' })
  update(@Param('id') id: string, @Body() updateProgramaDto: UpdateProgramaDto) {
    return this.programasService.update(id, updateProgramaDto);
  }


  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Programa académico eliminado correctamente' })
  remove(@Param('id') id: string) {
    return this.programasService.remove(id);
  }
    */
}
