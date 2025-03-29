import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Programa, ProgramaSchema } from './schemas/programa.schema';
import { ProgramasService } from './programas.service';
import { ProgramasController } from './programas.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Programa.name,
            schema: ProgramaSchema,
        }])
    ],
    providers: [ProgramasService],
    controllers: [ProgramasController],
    exports: [ProgramasService]
})
export class ProgramasModule {}
