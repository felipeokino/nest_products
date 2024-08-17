import { PageOptionsDto } from 'src/dtos/page-options.dto';
import { ProductsResponseDto } from '../dtos/products-response.dto';

export abstract class ProductRepository {
  abstract getProducts(
    pageOptions: PageOptionsDto,
  ): Promise<ProductsResponseDto>;
}
