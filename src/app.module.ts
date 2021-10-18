import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controller/products.controller';
import { ProductsService } from './service/products.service';
import { CustomerService } from './service/customer.service';
import { BrandService } from './service/brand.service';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { BrandController } from './controller/brand.controller';
import { CustomerController } from './controller/customer.controller';
import { CategoryController } from './controller/category.controller';
import { CategoryService } from './service/category.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, UserController, BrandController, CustomerController, CategoryController],
  providers: [AppService, ProductsService, CustomerService, BrandService, UserService, CategoryService],
})
export class AppModule { }
