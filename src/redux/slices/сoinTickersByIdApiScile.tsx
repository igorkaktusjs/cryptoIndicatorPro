import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Market {
  base: string;
  target: string;
  last: number;
  volume: number;
  trust_score: string;
  market: {
    name: string;
    logo?: string;
  };
}

interface TickersResponse {
  tickers: Market[];
}

export const сoinTickersByIdApiSlice = createApi({
  reducerPath: 'сoinTickersById',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3/' }),
  endpoints: (builder) => ({
    getCoinTickers: builder.query<TickersResponse, { id: string; page?: number }>({
      query: ({ id, page = 1 }) =>
        `coins/${id}/tickers?include_exchange_logo=true&page=${page}`,
    }),
  }),
});

export const { useGetCoinTickersQuery } = сoinTickersByIdApiSlice;
