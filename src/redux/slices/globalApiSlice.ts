
 import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
 import { TopGainersCoin,TopLosersCoin, TrendigCoin, CoinCategoryMarket } from '../../types/types';

 const API_BASE_URL = 'https://api.coingecko.com/api/v3';

 interface CoinMarketData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  price_change_percentage_24h: number;
}
 
 export const globalApiSlice = createApi({
   reducerPath: 'globalApi',
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
     getTrendingCoins: builder.query<TrendigCoin[], void>({
      query: () => 'search/trending',
      transformResponse: (response: any):TrendigCoin[] =>
        response.coins.slice(0, 3).map((c: any) => c.item),
    }),
    getTopCoinsForLosers: builder.query<TopLosersCoin[], {type: 'gainers' | 'losers'}>({
      query: () => 
        'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
      transformResponse: (response: TopLosersCoin[], meta,arg) => {
        const sorted = [...response].sort((a,b) => 
        arg.type === 'gainers' 
        ? b.price_change_percentage_24h = a.price_change_percentage_24h
        : a.price_change_percentage_24h - b.price_change_percentage_24h
        );
        return sorted.slice(0, 3);
      }
    }),
    getTopGainers: builder.query<TopGainersCoin[], void>({
      query: () =>
        'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h',
      transformResponse: (response: TopGainersCoin[]) => {
        return response
          .filter(
            (coin) =>
              coin.price_change_percentage_24h !== null &&
              coin.total_volume > 1000000 &&
              coin.market_cap > 10000000
          )
          .map((coin) => ({
            ...coin,
            score:
              coin.price_change_percentage_24h *
              Math.log10(coin.total_volume || 1),
          }))
          .sort((a, b) => b.score - a.score)
          .slice(0, 10); 
      },
    }),

    getTopCoinsByCategory: builder.query<CoinCategoryMarket[], { category: string }>({
      query: ({ category }) =>
        `/coins/markets?vs_currency=usd&category=${category}&order=market_cap_desc&per_page=10&page=1&sparkline=false`,
      transformResponse: (response: CoinCategoryMarket[]) => {
        return response.slice(0, 3);
      },
    }),
    getCoinsMarket: builder.query<CoinMarketData[],string[]>({
      query: (ids) => ({
        url: 'coins/markets',
        params: {
          vs_currency: 'usd',
          ids: ids.join(','), 
          per_page: ids.length,
          page: 1,
          sparkline: false,
        }
      })
    })
   }),
   
 });
 
 export const { 
  useGetGlobalDataQuery, 
  useGetTrendingCoinsQuery, 
  useGetTopCoinsForLosersQuery, 
  useGetTopGainersQuery,
  useGetTopCoinsByCategoryQuery,
  useGetCoinsMarketQuery
} = globalApiSlice;