import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import process from "process";
import { RootState } from "../store";
interface User {
  email: string;
  password: string;
  role?: "ADMIN";
}
export const authApi = createApi({
  reducerPath: "authApi",
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
    loginUser: builder.mutation({
      query: (body: { email: string; password: string }) => ({
        url: "/user/login",
        method: "POST",
        body,
      }),
    }),
    registerUser: builder.mutation({
      query: ({ email, password, role }: User) => ({
        url: "/user/registration",
        method: "POST",
        email,
        password,
        role,
      }),
    }),
    checkUser: builder.query({
      query: () => "/user/check",
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLazyCheckUserQuery,
} = authApi;
