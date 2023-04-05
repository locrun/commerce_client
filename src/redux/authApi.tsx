
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from './store'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",

    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),

  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { email: string, password: string }) => ({
        url: '/user/login',
        method: 'POST',
        body
      }),
    }),
    registerUser: builder.mutation({
      query: (body: { email: string, password: string, role?: "ADMIN" }) => ({
        url: '/user/registration',
        method: 'POST',
        body
      }),
    }),
    checkUser: builder.query({
      query: () => "/user/check",
    })
  }),
})

export const { useLoginUserMutation, useRegisterUserMutation, useLazyCheckUserQuery } = authApi


