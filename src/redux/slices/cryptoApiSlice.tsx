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
    getCoinsMarkets: builder.query({
      query: () => '/coins/markets?vs_currency=usd',
    }),
    getCoinById: builder.query({
      query: (id) => `/coins/markets?vs_currency=usd&ids=${id}`,
    })
  }),

});

export const { useGetGlobalDataQuery, useGetCoinsMarketsQuery, useGetCoinByIdQuery } = cryptoApiSlice;
