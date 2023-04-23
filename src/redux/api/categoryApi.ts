import process from "process";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export interface ICategory {
  id: number;
  name: string;
}

export const categoryApi = createApi({
  reducerPath: "category",
  tagTypes: ["category"],
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
    createCategory: builder.mutation({
      query: (body: { name: string }) => ({
        url: "/category",
        method: "POST",
        body,
      }),
      invalidatesTags: ["category"],
    }),
    getAllCategories: builder.query<ICategory[], void>({
      query: () => "/category",
      providesTags: ["category"],
    }),
  }),
});

export const { useGetAllCategoriesQuery, useCreateCategoryMutation } =
  categoryApi;
