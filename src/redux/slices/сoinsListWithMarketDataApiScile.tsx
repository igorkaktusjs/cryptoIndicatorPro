import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const сoinsListWithMarketDataApiScile = createApi({
  reducerPath: 'coinsListApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json');
      headers.set('x_cg_demo_api_key', 'CG-JmVqaxNtApAGksTMhRK2sxzk'); 
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCoinsListWithMarketData: builder.query({
      query: ({ vs_currency = 'usd', order = 'market_cap_desc', per_page = 100, page = 1 }) => {
        return `/coins/markets?vs_currency=${vs_currency}&order=${order}&per_page=${per_page}&page=${page}`;
      },
      transformResponse: (response: any[]) => {
        return response.map((coin: any) => ({
          id: coin.id,
          name: coin.name,
          symbol: coin.symbol.toUpperCase(),
          image: coin.image,
          currentPrice: coin.current_price,
          marketCap: coin.market_cap,
          marketCapRank: coin.market_cap_rank,
          priceChange24h: coin.price_change_percentage_24h,
          volume24h: coin.total_volume,
          circulatingSupply: coin.circulating_supply,
          total_supply: coin.total_supply,
        }));
      },
    }),
  }),
});

export const { useGetCoinsListWithMarketDataQuery } = сoinsListWithMarketDataApiScile;
export default сoinsListWithMarketDataApiScile;
