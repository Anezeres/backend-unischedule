import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/users.module';
import { DocentesModule } from './docentes/docentes.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoDBService } from './database/mongodb.service';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/docentes'),
    UsersModule,
    DocentesModule,
  ],
  controllers: [AppController],
  providers: [AppService, MongoDBService],
})
export class AppModule {}
