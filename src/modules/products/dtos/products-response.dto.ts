import { ProductsDto } from './products.dto';

export class ProductsResponseDto {
  data: ProductsDto[]
  meta: {
    total: number,
    page: number,
    perPage: number,
    totalPages: number
  }
}