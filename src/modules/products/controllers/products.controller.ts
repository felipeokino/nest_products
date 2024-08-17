import { Controller, Get, Query } from '@nestjs/common';

import { ProductsService } from 'src/modules/products/services/products.service';

import { PaginationDto } from 'src/dto/pagination.dto';
import { ResponseDto } from 'src/dto/response.dto';
import { ProductsDto } from '../dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAll(@Query() pageOptions: PaginationDto): Promise<ResponseDto<ProductsDto[]>> {
    const productsList = await this.productsService.getProducts(pageOptions);
    return {
      data: productsList,
    }
  }
}
