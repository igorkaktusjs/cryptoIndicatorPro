import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

const formatMarketCap = (marketCap: number): string => {
  if (marketCap >= 1e12) {
    return `$${(marketCap / 1e12).toFixed(2)} T`;
  } else if (marketCap >= 1e9) {
    return `$${(marketCap / 1e9).toFixed(2)} B`;
  } else if (marketCap >= 1e6) {
    return `$${(marketCap / 1e6).toFixed(2)} M`;
  } else {
    return `$${marketCap.toFixed(2)}`;
  }
};

export const binanceApiSlice = createApi({
  reducerPath: 'binanceApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getTop100ByMarketCap: builder.query({
      query: () => '/coins/markets?vs_currency=usd',
      transformResponse: (response: any[]) => {
        return response.map((item: any, index: number) => ({
          rank: index + 1,
          symbol: item.symbol.toUpperCase(),
          price: item.current_price, // Изменено
          change: item.price_change_percentage_24h,
          marketCap: formatMarketCap(item.market_cap),
          imageUrl: item.image,
        }));
      },
    }),
  }),
});

export const { useGetTop100ByMarketCapQuery } = binanceApiSlice;
