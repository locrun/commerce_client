import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import process from "process";
import { RootState } from "../store";

interface Response {
  rows: IProduct;
  count: number;
}

export interface IProduct {
  id: number;
  name: string;
  price: string;
  rating: string;
  img: string;
  typeId: number;
  brandId: number;
}

export interface IProductDetail {
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

export const productApi = createApi({
  reducerPath: "product",
  tagTypes: ["product"],
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
    createProduct: builder.mutation({
      query: (body: FormData) => ({
        url: "/product",
        method: "POST",
        body,
      }),
      invalidatesTags: ["product"],
    }),
    getAllProducts: builder.query<any, any>({
      query: (query) => `/product`,
      transformResponse: (response: Response) => ({
        product: response.rows,
        count: response.count,
      }),
      providesTags: ["product"],
    }),
    getOneProduct: builder.query<IProductDetail, unknown>({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
  useGetOneProductQuery,
} = productApi;
