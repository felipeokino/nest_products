import { ApiProperty } from '@nestjs/swagger';

export class PageOptionsDto {
  @ApiProperty({
    description: 'Page number',
    required: false,
    default: 1,
  })
  page: number;

  @ApiProperty({
    description: 'Number of items per page',
    required: false,
    default: 10,
  })
  itemsPerPage: number;

  @ApiProperty({
    description: 'Order by direction',
    required: false,
    default: 'asc',
    enum() {
      return ['asc', 'desc'];
    },
  })
  orderBy: 'asc' | 'desc';
}
