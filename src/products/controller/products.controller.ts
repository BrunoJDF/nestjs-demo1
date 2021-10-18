import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ProductsService } from '../service/products.service';
import { ParseIntPipe } from '../../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';

@Controller('products')
export class ProductsController {
    constructor(private service: ProductsService) { }

    @Get()
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ) {
        return this.service.findAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    getOneProduct(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(+id);
    }

    @Post()
    create(@Body() payload: CreateProductDto) {
        return this.service.create(payload);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
        return this.service.update(+id, payload);
    }
}
