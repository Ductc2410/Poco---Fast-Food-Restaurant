interface OrderItem {
  productId: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export default interface IOrder {
  code: string;
  name?: string;
  phone?: string;
  address?: string;
  email?: string;
  orderDetail: OrderItem[];
  amount: number;
  note?: string;
  status: "Order Placed" | "Processing" | "Shipping" | "Completed" | "Cancelled";
  userId?: number;
}
