import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';


@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService],
})
export class ProductModule {}
