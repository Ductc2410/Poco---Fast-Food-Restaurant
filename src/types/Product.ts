export default interface IProduct {
  id: number;
  sku: string;
  name: string;
  image: string;
  price: number;
  price_sale: number;
  overview: string;
  description: string;
  description_short: string;
  quantity: number;
  status: string;
  categoryId: number;
}
