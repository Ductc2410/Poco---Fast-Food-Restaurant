interface OrderItem {
  productId: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export type Status = "Order Placed" | "Processing" | "Shipping" | "Completed" | "Cancelled";

export default interface IOrder {
  id?: number;
  code: string;
  name?: string;
  phone?: string;
  address?: string;
  email?: string;
  orderDetail: OrderItem[];
  amount: number;
  note?: string;
  status: Status;
  date: string;
  userId?: number;
}
