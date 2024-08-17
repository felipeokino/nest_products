import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PaginationDto } from 'src/dto/pagination.dto';
import { ProductsDto } from '../dtos/products.dto';



@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  async getProducts({ page, itemsPerPage = 10, orderBy = 'asc' }: PaginationDto): Promise<ProductsDto[]> {
    let rawPage = page;
    if (typeof rawPage !== 'number') {
      rawPage = 1;
    }

    let skip = rawPage === 1 ? 0 : (page - 1) * itemsPerPage;

    const products = await this.prisma.product.findMany({
      skip,
      take: itemsPerPage,
      orderBy: {
        id: orderBy,
      }
    });

    return products;
  }
}
