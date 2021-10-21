import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';
import { Product } from '../entity/product';

@Injectable()
export class ProductsService {
  private counter = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'product 1',
      description: 'bla bla',
      price: 123.3,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException('Product #' + id + ' not found');
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counter = this.counter + 1;
    const newProduct = {
      id: this.counter,
      ...payload,
    };
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id);
      this.products[index] = { ...product, ...payload };
      return this.products[index];
    }
    return null;
  }
}
