import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MongoDBService } from './database/mongodb.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mongoDBService: MongoDBService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}