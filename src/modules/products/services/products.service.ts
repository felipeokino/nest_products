import { Injectable } from '@nestjs/common';
import { PageOptionsDto } from 'src/dtos/page-options.dto';
import { ProductsResponseDto } from '../dtos/products-response.dto';
import { ProductRepository } from '../repository/product-repository';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductRepository) {}
  async getProducts(pageOptions: PageOptionsDto): Promise<ProductsResponseDto> {
    return await this.productRepository.getProducts(pageOptions);
  }
}
