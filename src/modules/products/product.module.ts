import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ProductsController } from './controllers/products.controller';
import { PrismaProductRepository } from './repository/prisma/prisma-product-repository';
import { ProductRepository } from './repository/product-repository';
import { ProductsService } from './services/products.service';


@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService, {
    provide: ProductRepository,
    useClass: PrismaProductRepository,
  }],
})
export class ProductModule {}
