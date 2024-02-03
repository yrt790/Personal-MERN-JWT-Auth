import { apiSlice } from '../apiSlice';

const BASE_URL = '/api/user';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/login`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${BASE_URL}/logout`,
        method: 'POST',
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/register`,
        method: 'POST',
        body: data,
      }),
    }),
    update: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/profile`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useSignupMutation,
  useUpdateMutation,
} = userApiSlice;
