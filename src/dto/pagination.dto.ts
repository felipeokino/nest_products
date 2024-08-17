export class PaginationDto {
  page?: number;
  limit?: number;
  itemsPerPage?: number;
  totalItems?: number;
  orderBy?: 'asc' | 'desc';
}
