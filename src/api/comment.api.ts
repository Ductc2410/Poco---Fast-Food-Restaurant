import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentApi = createApi({
  reducerPath: "commentsRTKq",
  tagTypes: ["Comments"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000"
  }),
  endpoints: (builder) => ({
    getComments: builder.query<any[], number>({
      query: (id) => `/comments?productId=${id}`,
      providesTags: ["Comments"],
      keepUnusedDataFor: 30
    }),

    createComment: builder.mutation({
      query: (data) => ({
        url: "/comments",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Comments"]
    })
  })
});

export const { useGetCommentsQuery, useCreateCommentMutation } = commentApi;
