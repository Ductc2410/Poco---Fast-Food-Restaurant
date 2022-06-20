import instance from "./instance";
import { IProductForm } from "../types/ProductForm";

export const getProductList = () => {
  const url = "/products";
  return instance.get(url);
};

export const createProduct = (data: IProductForm) => {
  const url = "/products";
  return instance.post(url, data);
};
