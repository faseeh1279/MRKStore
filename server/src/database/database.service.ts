// src/db/db.service.ts
import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DbService {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'ntsh1234',
      database: 'MRKStoreDb',
    });
  }

  query(text: string, params?: any[]) {
    return this.pool.query(text, params);
  }
}