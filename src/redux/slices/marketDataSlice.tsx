import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const marketDataApi = createApi({
  reducerPath: 'marketDataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json');
      headers.set('x_cg_demo_api_key', 'CG-JmVqaxNtApAGksTMhRK2sxzk'); // Убедитесь, что у вас есть ваш реальный ключ
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMarketChart: builder.query({
        query: ({ id, vs_currency = 'usd', days }) => {
             return `coins/${id}/market_chart?vs_currency=${vs_currency}&days=${days}`
        } 
    }),
  }),
});

export const { useGetMarketChartQuery } = marketDataApi;