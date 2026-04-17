import { Global, Module } from '@nestjs/common';
import { DATABASE_URL, DRIZZLE } from './database.constants';
import { drizzle } from 'drizzle-orm/node-mssql';
import { connect } from 'mssql';
import type { config as mssqlConfig } from 'mssql';
import * as schema from '../schemas/index';

@Global()
@Module({
  providers: [
    {
      provide: DRIZZLE,
      inject: [],
      useFactory: async () => {
        const dbconfig: mssqlConfig = {
          server: 'SRV-BD-1',
          port: 1433,
          user: 'alunos_des225',
          password: '123',
          database: 'des225_joaop',
          options: {
            encrypt: false,
            trustServerCertificate: true,
          },
        };

        const pool = await connect(dbconfig);

        return drizzle({ client: pool, schema: schema });
      },
    },
  ],
  exports: [DRIZZLE],
})
export class DatabaseModule {}
