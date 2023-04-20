import process from "process";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export interface ITypes {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export const typeApi = createApi({
  reducerPath: "types",
  tagTypes: ["type"],
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
    createType: builder.mutation({
      query: (body: { name: string }) => ({
        url: "/type",
        method: "POST",
        body,
      }),
      invalidatesTags: ["type"],
    }),
    getAllTypes: builder.query<ITypes[], void>({
      query: () => "/type",
      providesTags: ["type"],
    }),
  }),
});

export const { useGetAllTypesQuery, useCreateTypeMutation } = typeApi;
