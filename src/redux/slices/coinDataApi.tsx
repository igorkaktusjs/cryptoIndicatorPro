import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const coinDataApi = createApi({
  reducerPath: 'coinDataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json');
      headers.set('x_cg_demo_api_key', 'CG-JmVqaxNtApAGksTMhRK2sxzk'); // Убедитесь, что у вас есть ваш реальный ключ
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCoinDataById: builder.query({
      query: (id) => `coins/${id}`,
      transformResponse: (response) => ({
        id: response.id,
        symbol: response.symbol.toUpperCase(),
        name: response.name,
        image: response.image.large,
        description: response.description.en,
        links: response.links,
        rank: response.coingecko_rank,
        marketCap: response.market_data.market_cap.usd,
        circulatingSupply: response.market_data.circulating_supply,
        totalSupply: response.market_data.total_supply,
        maxSupply: response.market_data.max_supply,
        ath_change_percentage: response.ath_change_percentage,
        athDate: response.market_data.ath_date.usd,
        atl: response.market_data.atl.usd,
        atlDate: response.market_data.atl_date.usd,
        genesisDate: response.genesis_date,
        currentPrice: response.market_data.current_price.usd,
        volume24h: response.market_data.total_volume.usd,
        high24h: response.market_data.high_24h.usd,
        low24h: response.market_data.low_24h.usd,
        categories: response.categories
      }),
    }),
  }),
});

export const { useGetCoinDataByIdQuery } = coinDataApi;
