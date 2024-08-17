import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PageOptionsDto } from 'src/dtos/page-options.dto';
import { ProductsResponseDto } from '../../dtos/products-response.dto';
import { ProductRepository } from '../product-repository';

const ITEMS_PER_PAGE = 10;

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private prisma: PrismaService) {}
  async getProducts({
    page = 0,
    itemsPerPage = ITEMS_PER_PAGE,
    orderBy = 'asc',
  }: PageOptionsDto): Promise<ProductsResponseDto> {
    let rawPage = Number(page);

    if (typeof rawPage !== 'number') rawPage = 1;

    const skip = rawPage <= 1 ? 0 : (page - 1) * itemsPerPage;

    const products = await this.prisma.product.findMany({
      skip,
      take: Number(itemsPerPage),
      orderBy: {
        id: orderBy,
      },
    });

    const total = await this.prisma.product.count();

    return {
      data: products,
      meta: {
        total,
        page,
        perPage: itemsPerPage,
        totalPages: Math.floor(total / itemsPerPage),
      },
    };
  }
}
