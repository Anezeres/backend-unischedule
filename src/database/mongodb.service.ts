import { Injectable, OnModuleInit } from '@nestjs/common';
import { MongoClient, ServerApiVersion } from 'mongodb';

@Injectable()
export class MongoDBService implements OnModuleInit {
  private client: MongoClient;

  constructor() {
    // Validar que la URI existe
    if (!process.env.MONGODB_URI) {
      throw new Error('❌ MONGODB_URI no está definida en .env');
    }
    
    this.client = new MongoClient(process.env.MONGODB_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
  }

  async onModuleInit() {
    try {
      await this.client.connect();
      await this.client.db('admin').command({ ping: 1 });
      console.log('✅ MongoDB Connected!');
    } catch (error) {
      console.error('❌ MongoDB Connection Error:', error);
      process.exit(1);
    }
  }

  getDatabase() {
    return this.client.db('RedOpsDB');
  }
}