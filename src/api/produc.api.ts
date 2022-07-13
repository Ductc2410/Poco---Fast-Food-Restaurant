import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import IProduct from "../types/Product";

interface IQueryArg {
  _page: number;
  _limit: number;
  name_like?: string;
  categoryId?: number;
  price_gte?: number;
  price_lte?: number;
}

export const productApi = createApi({
  reducerPath: "productsRTKq",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000"
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<any, IQueryArg>({
      query: (params) => {
        let url = "";
        for (const key in params) {
          if (key && params[key as keyof IQueryArg]) {
            url += `&${key}=${params[key as keyof IQueryArg]}`;
          }
        }
        return `/products?${url.substring(1)}`;
      },

      transformResponse: (returnValue: IProduct[], meta: any) => {
        return {
          products: returnValue,
          total: meta.response.headers.get("X-Total-Count")
        };
      },
      providesTags: ["Products"],
      keepUnusedDataFor: 30
    }),

    getProductByName: builder.query({
      query: (name) => `/products?name_like=${name}&_expand=category`,
      providesTags: ["Products"],
      keepUnusedDataFor: 5
    }),

    deleteProduct: builder.mutation({
      query: ({ id }) => ({
        url: `/clients/${id}`,
        method: "DELETE",
        body: id
      }),
      invalidatesTags: ["Products"]
    })
  })
});

export const { useGetProductsQuery, useDeleteProductMutation, useGetProductByNameQuery } =
  productApi;
