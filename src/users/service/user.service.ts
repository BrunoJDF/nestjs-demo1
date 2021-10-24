import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'pg';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

import { Order } from '../entity/order';
import { User } from '../entity/user';

import { ProductsService } from './../../products/service/products.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private repository: Repository<User>,
    private productService: ProductsService,
    private configService: ConfigService,
    @Inject('PG') private clientPg: Client,
  ) { }

  getAllUsers() {
    return this.repository.find();
  }

  createUser(payload: CreateUserDto) {
    return this.repository.save(payload);
  }

  async updateUser(id: number, payload: UpdateUserDto) {
    const user = await this.repository.findOne(id);
    if (!user) {
      throw new NotFoundException('El usuario ' + id + ' no existe');
    }
    this.repository.merge(user, payload);
    return this.repository.save(user);
  }

  deleteUser(id: number) {
    return this.repository.delete(id);
  }

  async getOrdersByUser(id: number) {
    const user = this.repository.findOne(id);
    const apiKey = this.configService.get('API_KEY');
    console.log('ApiKey ' + apiKey);
    return {
      date: new Date(),
      user,
      products: await this.productService.findAll(),
    };
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
