import { Product } from 'src/products/entity/product';
import { User } from './user';

export class Order {
  date: Date;
  user: User;
  products: Product[];
}
