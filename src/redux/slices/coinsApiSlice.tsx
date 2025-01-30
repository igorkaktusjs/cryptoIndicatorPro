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

export const coinsApiSlice = createApi({
  reducerPath: 'coinsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json');
      headers.set('x_cg_demo_api_key', 'CG-JmVqaxNtApAGksTMhRK2sxzk');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Existing endpoint for coins markets
    getCoinsMarkets: builder.query({
      query: () => '/coins/markets?vs_currency=usd',
    }),

    // Existing endpoint for getting coin by ID
    getCoinById: builder.query({
      query: (id) => `/coins/markets?vs_currency=usd&ids=${id}`,
    }),

    // Existing endpoint for listing coins with market data
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
          totalSupply: coin.total_supply,
        }));
      },
    }),

    // Existing endpoint for market chart
    getMarketChart: builder.query({
      query: ({ id, vs_currency = 'usd', days }) => {
        return `coins/${id}/market_chart?vs_currency=${vs_currency}&days=${days}`;
      },
    }),

    // Merged endpoint for top 100 by market cap
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

    // New endpoint for getting coin data by ID
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

    getCoinTickers: builder.query({
      query: (coinId) => `coins/${coinId}/tickers?include_exchange_logo=true`,
      transformResponse: (response: any) => (
        response.tickers?.map((ticker: any, index: number) => ({
          name: ticker.market.name,
          rank: index + 1,
          logo: ticker.market.logo,
          volume: ticker.volume,
          trust: ticker.trust_score,
          price: ticker.last,
          base: ticker.base,
          target: ticker.target
        })) || [] // Return empty array if tickers is undefined
      )
    })
    

  }),
});

export const {
  useGetCoinsMarketsQuery,
  useGetCoinByIdQuery,
  useGetCoinsListWithMarketDataQuery,
  useGetMarketChartQuery,
  useGetTop100ByMarketCapQuery,
  useGetCoinDataByIdQuery,
  useGetCoinTickersQuery
} = coinsApiSlice;