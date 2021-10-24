import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';
import { Product } from '../entity/product';

@Injectable()
export class ProductsService {

  constructor(@InjectRepository(Product) private repository: Repository<Product>) { }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    const product = await this.repository.findOne(id);
    if (!product) {
      throw new NotFoundException('Product #' + id + ' not found');
    }
    return product;
  }

  create(payload: CreateProductDto) {
    /*const newProduct = {
      id: this.counter,
      ...payload,
    };*/
    /*const newProduct = new Product();
    newProduct.name = payload.name;
    newProduct.description = payload.description;
    newProduct.stock = payload.stock;
    newProduct.price = payload.price;
    newProduct.image = payload.image;*/

    const newProduct = this.repository.create(payload);
    return this.repository.save(newProduct);
  }

  async update(id: number, payload: UpdateProductDto) {
    const product = await this.findOne(id);
    this.repository.merge(product, payload);
    if (!product) {
      /*const index = this.products.findIndex((item) => item.id);
      this.products[index] = { ...product, ...payload };
      return this.products[index];*/
      return null;
    }
    return this.repository.save(product);
  }

  delete(id: number) {
    return this.repository.delete(id);
  }
}
