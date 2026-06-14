import { Module } from '@nestjs/common';
import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';

export const PG_POOL = 'PG_POOL';
@Module({
  providers: [
    {
      provide: PG_POOL,
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return new Pool({
          host: config.get('DB_HOST'),
          port: Number(config.get('DB_PORT')),
          user: config.get('DB_USER'),
          password: config.get('DB_PASS'),
          database: config.get('DB_NAME'),
        });
      },
    },
  ],
  exports: [PG_POOL],
})
export class DatabaseModule {
    
}
