import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'pg';

import config from 'src/config';

const API_KEY = '123456';
const API_KEY_PROD = 'PROD123456';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { name, user, password, host, port } = configService.postgres;
        return {
          type: 'postgres',
          host,
          port,
          username: user,
          password,
          database: name,
          synchronize: true,
          autoLoadEntities: true,
        };
      }
    }),
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV == 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'PG',
      useFactory: (configService: ConfigType<typeof config>) => {
        const { name, user, password, host, port } = configService.postgres;

        const client = new Client({
          user: user,
          password: password,
          host: host,
          database: name,
          port: port
        });

        client.connect();

        return client;
      },
      inject: [config.KEY],
    }
  ],
  exports: ['API_KEY', 'PG', TypeOrmModule],
})
export class DatabaseModule { }
