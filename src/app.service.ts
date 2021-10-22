import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('TASK') private task: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    @Inject('PG') private clientPg: Client,
  ) { }

  getHello(): string {
    console.log(this.configService.database.port);
    console.log(this.configService.database.name);
    return 'Hello World! ' + this.configService.apiKey;
  }

  getTasks() {
    return new Promise((resolve, reject) => {
      this.clientPg.query('select * from tasks', (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res.rows);
      });
    });

  }
}
