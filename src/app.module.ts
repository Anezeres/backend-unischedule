import { Module } from '@nestjs/common';
import { AppController } from './app.controller'; // Existente
import { AppService } from './app.service'; // Existente
import { MongoDBService } from './database/mongodb.service'; // Nuevo

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MongoDBService], // Agrega MongoDBService
})
export class AppModule {}