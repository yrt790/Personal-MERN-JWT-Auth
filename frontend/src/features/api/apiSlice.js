import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});
