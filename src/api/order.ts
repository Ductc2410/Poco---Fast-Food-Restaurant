import instance from "./instance";
import IOrder from "../types/Order";

export const getOrders = (params: any) => {
  let url = "/orders?";

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key) && params[key]) {
      url += `${key}=${params[key]}&`;
    }
  }

  return instance.get(url.slice(0, -1));
};

export const createOrder = (formData: IOrder) => {
  const url = "/orders";
  return instance.post(url, formData);
};

export const getOrderByUserId = (id: number) => {
  const url = `/orders?userId=${id}`;
  return instance.get(url);
};

export const changeOrderStatus = ({ id, status }: { id: number; status: string }) => {
  const url = `/orders/${id}`;
  return instance.patch(url, { status });
};
