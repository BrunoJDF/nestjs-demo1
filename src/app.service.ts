import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('TASK') private task: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    console.log(this.configService.database.port);
    console.log(this.configService.database.name);
    return 'Hello World! ' + this.configService.apiKey;
  }
}
