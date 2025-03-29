import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Programa } from "./schemas/programa.schema";
import { Model } from "mongoose";
import { CreateProgramaDto } from "./dto/programa.dto";
import { UpdateProgramaDto } from "./dto/actualizarPrograma.dto";
import { NotFoundException } from "@nestjs/common";
import { ReplaceProgramaDto } from "./dto/reemplazarPrograma.dto";

@Injectable()
export class ProgramasService {
    constructor(@InjectModel(Programa.name) private programaModel: Model<Programa>) {}

    // Crear Programa
    createPrograma(createProgramaDto: CreateProgramaDto) {
        const newPrograma = new this.programaModel(createProgramaDto);
        return newPrograma.save();
    }

    getProgramas() {
        return this.programaModel.find()
    }

    getUnPrograma(id: string) {
        return this.programaModel.findById(id)
    }

    async update(id: string, updateProgramaDto: UpdateProgramaDto): Promise<Programa> {
        const programaActualizado = await this.programaModel
          .findByIdAndUpdate(id, updateProgramaDto, { new: true, runValidators: true })
          .exec();
        
        if (!programaActualizado) {
          throw new NotFoundException(`Programa con ID ${id} no encontrado`);
        }
        return programaActualizado;
    }

    async delete(id: string): Promise<boolean> {
        const resultado = await this.programaModel.findByIdAndDelete(id).exec();
        if (!resultado) {
          throw new NotFoundException(`Programa con ID ${id} no encontrado`);
        }
        return true;
      }

      async replace(id: string, replaceProgramaDto: ReplaceProgramaDto): Promise<Programa> {
        const programaActualizado = await this.programaModel
          .findOneAndReplace({ _id: id }, replaceProgramaDto, { new: true, runValidators: true })
          .exec();
    
        if (!programaActualizado) {
          throw new NotFoundException(`Programa con ID ${id} no encontrado`);
        }
        return programaActualizado;
      }
    
}