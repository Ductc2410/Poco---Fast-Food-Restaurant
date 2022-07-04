import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import ICategory from "../types/Category";

export const categoryApi = createApi({
  reducerPath: "categoryRTKq",
  tagTypes: ["Category"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000"
  }),
  endpoints: (builder) => ({
    getCategory: builder.query<ICategory[], void>({
      query: () => "/categories",
      providesTags: ["Category"],
      keepUnusedDataFor: 15
    }),

    createCategory: builder.mutation({
      query: (data) => ({
        url: "/categories",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Category"]
    }),

    removeCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Category"]
    })
  })
});

export const { useCreateCategoryMutation, useGetCategoryQuery, useRemoveCategoryMutation } =
  categoryApi;
