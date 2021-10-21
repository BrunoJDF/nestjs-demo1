import { Controller, Get, Param } from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Get(':id/orders')
  getOrders(@Param('id', ParseIntPipe) id: number) {
    return this.service.getOrdersByUser(id);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }
}
