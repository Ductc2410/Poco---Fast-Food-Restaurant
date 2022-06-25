import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import IProduct from "../types/Product";

export const productApi = createApi({
  reducerPath: "productsRTKq",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000"
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => "/products",
      providesTags: ["Products"],
      keepUnusedDataFor: 30
    }),

    getProductByName: builder.query({
      query: (name) => `/products?name_like=${name}&_expand=category`,
      providesTags: ["Products"],
      keepUnusedDataFor: 0
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
