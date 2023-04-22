import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import process from "process";
import { RootState } from "../store";

export const cartApi = createApi({
  reducerPath: "cart",
  tagTypes: ["cart"],
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
    addItemsToCart: builder.mutation({
      query: (body) => ({
        url: "/cart",
        method: "POST",
        body,
      }),
      invalidatesTags: ["cart"],
    }),
    getAllCartItems: builder.query<any, any>({
      query: () => `/cart`,
      providesTags: ["cart"],
    }),
  }),
});

export const { useGetAllCartItemsQuery, useAddItemsToCartMutation } = cartApi;
