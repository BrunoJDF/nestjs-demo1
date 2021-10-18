import { Module } from '@nestjs/common';
import { ProductsController } from './controller/products.controller';
import { CategoryController } from './controller/category.controller';
import { ProductsService } from './service/products.service';
import { CategoryService } from './service/category.service';
import { BrandController } from './controller/brand.controller';
import { BrandService } from './service/brand.service';

@Module({
    controllers: [ProductsController, CategoryController, BrandController],
    providers: [ProductsService, CategoryService, BrandService]
})
export class ProductsModule { }
