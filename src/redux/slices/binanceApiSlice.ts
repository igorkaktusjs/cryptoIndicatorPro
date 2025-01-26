import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

const formatMarketCap = (marketCap: number): string => {
  if (marketCap >= 1e12) {
    return `$${(marketCap / 1e12).toFixed(2)} T`;
  } else if (marketCap >= 1e9) {
    return `$${(marketCap / 1e9).toFixed(2)} B`;
  } else if (marketCap >= 1e6) {
    return `$${(marketCap / 1e6).toFixed(2)} Million`;
  } else {
    return `?`;
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
          id: item.id,
          name: item.name,
          rank: index + 1,
          symbol: item.symbol.toUpperCase(),
          price: item.current_price, 
          change: item.price_change_percentage_24h,
          marketCap: formatMarketCap(item.market_cap),
          market_cap_change_percentage_24h: formatMarketCap(item.market_cap_change_percentage_24h),
          market_cap_change_24h: formatMarketCap(item.market_cap_change_24h),
          imageUrl: item.image,
          total_volume: formatMarketCap(item.total_volume),
          high_24h: item.high_24h,
          low_24h: item.low_24h,
          price_change_24h: item.price_change_24h,
          circulating_supply: formatMarketCap(item.circulating_supply),
          total_supply: formatMarketCap(item.total_supply),
          max_supply: formatMarketCap(item.max_supply),
          ath: item.ath,
          ath_change_percentage: item.ath_change_percentage,
          ath_date: item.ath_date,
          atl: item.atl,
          atl_change_percentage: item.atl_change_percentage,
          atl_date: item.atl_date,
          roi: item.roi,
          last_updated: item.last_updated

        }));
      },
    }),
  }),
});

export const { useGetTop100ByMarketCapQuery } = binanceApiSlice;
