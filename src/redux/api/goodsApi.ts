import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

interface Response {}

export interface IGoods {
  id: number;
  name: string;
  price: string;
  rating: string;
  img: string;
  typeId: number;
  brandId: number;
  infos: [];
}

export const goodsApi = createApi({
  reducerPath: "goods",
  tagTypes: ["goods"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",

    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    createGoods: builder.mutation({
      query: (body: FormData) => ({
        url: "/product",
        method: "POST",
        body,
      }),
      invalidatesTags: ["goods"],
    }),
    getAllGoods: builder.query<any, void>({
      query: () => "/product",
      providesTags: ["goods"],
    }),
    getOneGoods: builder.query<any, unknown>({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const {
  useCreateGoodsMutation,
  useGetAllGoodsQuery,
  useGetOneGoodsQuery,
} = goodsApi;
