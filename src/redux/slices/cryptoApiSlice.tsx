import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const cryptoApiSlice = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json');
      headers.set('x-cg-demo-api-key', 'CG-JmVqaxNtApAGksTMhRK2sxzk');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getGlobalData: builder.query({
      query: () => '/global',
    }),
  }),
});

export const { useGetGlobalDataQuery } = cryptoApiSlice;
