import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import process from "process";
import { RootState } from "../store";

interface Response {
  rows: IGoods;
  count: number;
}

export interface IGoods {
  id: number;
  name: string;
  price: string;
  rating: string;
  img: string;
  typeId: number;
  brandId: number;
}

export interface IGoodsDetail {
  data: {
    id: number;
    name: string;
    price: string;
    rating: string;
    info: [];
    img: string;
    typeId: number;
    brandId: number;
    createdAt: string;
    updatedAt: string;
  };
}

export const goodsApi = createApi({
  reducerPath: "goods",
  tagTypes: ["goods"],
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
    createGoods: builder.mutation({
      query: (body: FormData) => ({
        url: "/goods",
        method: "POST",
        body,
      }),
      invalidatesTags: ["goods"],
    }),
    getAllGoods: builder.query<any, any>({
      query: (query = "") => `/goods${query}`,
      providesTags: ["goods"],
      transformResponse: (response: Response) => ({
        goods: response.rows,
        count: response.count,
      }),
    }),
    getOneGoods: builder.query<IGoodsDetail, unknown>({
      query: (id) => `/goods/${id}`,
    }),
  }),
});

export const {
  useCreateGoodsMutation,
  useGetAllGoodsQuery,
  useLazyGetAllGoodsQuery,
  useGetOneGoodsQuery,
} = goodsApi;
