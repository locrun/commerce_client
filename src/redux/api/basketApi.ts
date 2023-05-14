import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

import process from "process";

export const basketApi = createApi({
  reducerPath: "basketApi",
  tagTypes: ["basket"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    append: builder.mutation({
      query: (productId: number) => ({
        url: `basket/product/${productId}/append/1`,
        method: "PUT",
        SameSite: "None",
        Secure: true,
      }),
    }),

    getOne: builder.query<any, any>({
      query: () => "/basket/getone",
      providesTags: ["basket"],
    }),

    increment: builder.mutation({
      query: (productId: number) => ({
        url: `basket/product/${productId}/increment/1`,
        method: "PUT",
        SameSite: "None",
        Secure: true,
      }),
      invalidatesTags: ["basket"],
    }),
    decrement: builder.mutation({
      query: (productId: number) => ({
        url: `basket/product/${productId}/decrement/1`,
        method: "PUT",
        SameSite: "None",
        Secure: true,
      }),
      invalidatesTags: ["basket"],
    }),

    remove: builder.mutation({
      query: (productId: number) => ({
        url: `basket/product/${productId}/remove`,
        method: "PUT",
        SameSite: "None",
        Secure: true,
      }),
      invalidatesTags: ["basket"],
    }),
  }),
});

export const {
  useLazyGetOneQuery,
  useAppendMutation,
  useRemoveMutation,
  useIncrementMutation,
  useDecrementMutation,
} = basketApi;
