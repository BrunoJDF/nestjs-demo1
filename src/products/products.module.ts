import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsController } from './controller/products.controller';
import { CategoryController } from './controller/category.controller';
import { ProductsService } from './service/products.service';
import { CategoryService } from './service/category.service';
import { BrandController } from './controller/brand.controller';
import { BrandService } from './service/brand.service';
import { Product } from './entity/product';

@Module({
  imports: [TypeOrmModule.forFeature(
    [
      Product
    ]
  )],
  controllers: [ProductsController, CategoryController, BrandController],
  providers: [ProductsService, CategoryService, BrandService],
  exports: [ProductsService],
})
export class ProductsModule { }
