import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from '../entity/order';
import { User } from '../entity/user';

import { ProductsService } from './../../products/service/products.service'

@Injectable()
export class UserService {

    constructor(private productService: ProductsService) { }

    private users: User[] = [
        {
            id: 1,
            firstname: "Bruno",
            lastname: "Diaz",
            email: "bruno@hotmail",
            password: "123456"
        },
    ];

    getOrdersByUser(id: number): Order {
        const user = this.findOne(id);
        return {
            date: new Date(),
            user,
            products: this.productService.findAll()
        };
    }

    findOne(id: number) {
        const user = this.users.find((item) => item.id == id);
        if (!user) {
            throw new NotFoundException("El usuario de codigo " + id + " no existe");
        }
        return user;
    }
}
