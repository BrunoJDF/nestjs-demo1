import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { CustomerController } from './controller/customer.controller';
import { CustomerService } from './service/customer.service';

import { ProductsModule } from 'src/products/products.module';

@Module({
    imports: [ProductsModule],
    controllers: [CustomerController, UserController],
    providers: [CustomerService, UserService]
})
export class UsersModule { }
