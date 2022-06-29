export interface IPagination {
  _page: number;
  _limit: number;
}

export interface IParamsFilter {
  name_like: string;
  categoryId: number | undefined;
  price_gte: number | undefined;
  price_lte: number | undefined;
}
