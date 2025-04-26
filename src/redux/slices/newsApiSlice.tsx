import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Constants from 'expo-constants';
import type { CryptoPanicPost, CryptoPanicApiResponse } from '../../types/types';

const API_KEY = Constants.expoConfig?.extra?.CRYPTOPANIC_API_KEY;

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://cryptopanic.com/api/v1',
  }),
  endpoints: (builder) => ({
    getLatestNews: builder.query<CryptoPanicPost[], void>({
      query: () => `/posts/?auth_token=${API_KEY}&public=true&filter=important&kind=news&regions=en`,
      transformResponse: (response: CryptoPanicApiResponse) => response.results,
    }),
    getNewsByCurrency: builder.query<CryptoPanicPost[], string>({
      query: (currency) =>
        `/posts/?auth_token=${API_KEY}&public=true&currencies=${currency}&kind=news&regions=en`,
      transformResponse: (response: CryptoPanicApiResponse) => response.results,
    }),
    getNewsByFilter: builder.query<CryptoPanicPost[], string>({
      query: (filter) =>
        `/posts/?auth_token=${API_KEY}&public=true&filter=${filter}&kind=news&regions=en`,
      transformResponse: (response: CryptoPanicApiResponse) => response.results,
    }),
  }),
});

export const {
  useGetLatestNewsQuery,
  useGetNewsByCurrencyQuery,
  useGetNewsByFilterQuery,
} = newsApi;
