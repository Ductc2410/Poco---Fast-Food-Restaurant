import instance from "./instance";
import IOrder from "../types/Order";

export const createOrder = (formData: IOrder) => {
  const url = "/orders";
  return instance.post(url, formData);
};

export const getOrderByUserId = (id: number) => {
  const url = `/orders?userId=${id}`;
  return instance.get(url);
};
