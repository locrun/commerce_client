import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import process from "process";
import { RootState } from "../store";

export const basketApi = createApi({
  reducerPath: "basket",
  tagTypes: ["basket"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    addProductsToBasket: builder.mutation({
      query: (body: { productId: number }) => ({
        url: "/basket",
        method: "POST",
        body,
      }),
      invalidatesTags: ["basket"],
    }),
    getAllBasketProducts: builder.query<any, any>({
      query: () => `/basket`,
      providesTags: ["basket"],
    }),
  }),
});

export const { useGetAllBasketProductsQuery, useAddProductsToBasketMutation } =
  basketApi;
