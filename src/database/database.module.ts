import { Module, Global } from '@nestjs/common';
import { Client } from 'pg';

const API_KEY = '123456';
const API_KEY_PROD = 'PROD123456';

const client = new Client({
  user: 'root',
  password: '123456',
  host: 'localhost',
  database: 'mydb',
  port: 5432
});

client.connect();
/*client.query('select * from tasks', (err, res) => {
  console.log(err);
  console.log(res.rows);
});*/

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV == 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'PG',
      useValue: client,
    }
  ],
  exports: ['API_KEY', 'PG'],
})
export class DatabaseModule { }
