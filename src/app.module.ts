import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { DocentesModule } from './docentes/docentes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/docentes'),
    UsersModule,
    DocentesModule,
  ],
})
export class AppModule {}
