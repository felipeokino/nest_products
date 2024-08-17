import { Controller, Get, Query } from '@nestjs/common';

import { ProductsService } from 'src/modules/products/services/products.service';

import { ApiTags } from '@nestjs/swagger';
import { PageOptionsDto } from 'src/dtos/page-options.dto';
import { ProductsResponseDto } from '../dtos/products-response.dto';
@ApiTags('Products')
@Controller('api/v1/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAll(
    @Query() pageOptions: PageOptionsDto,
  ): Promise<ProductsResponseDto> {
    return await this.productsService.getProducts(pageOptions);
  }
}
