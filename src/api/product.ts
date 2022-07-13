import instance from "./instance";
import { IProductForm } from "../types/ProductForm";

export const getProductList = (filters: any) => {
  let url = "/products?";

  if (filters.categoryId) {
    url += `categoryId=${filters.categoryId}&`;
  }

  if (filters.orderBy) {
    url += `_sort=price&_order=${filters.orderBy}&`;
  } else {
    url += `_sort=id&_order=desc&`;
  }

  if (filters.name_like) {
    url += `name_like=${filters.name_like}&`;
  }

  return instance.get(url.slice(0, -1));
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

export const removeProduct = (id: number) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};
