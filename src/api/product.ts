import instance from "./instance";
import { IProductForm } from "../types/ProductForm";

export const getProductList = () => {
  const url = "/products";
  return instance.get(url);
};

export const getProduct = (id: number) => {
  const url = `/products/${id}`;
  return instance.get(url);
};

export const getProductByName = (name: string) => {
  const url = `/products?name_like=${name}&_expand=category`;
  return instance.get(url);
};

export const updateProduct = (data: IProductForm, id: number) => {
  const url = `/products/${id}`;
  return instance.put(url, data);
};

export const createProduct = (data: IProductForm) => {
  const url = "/products";
  return instance.post(url, data);
};
