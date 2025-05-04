// src/store/api/newsApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Constants from 'expo-constants';
import type { CryptoPanicPost, CryptoPanicApiResponse } from '../../types/types';

const API_KEY = Constants.expoConfig?.extra?.CRYPTOPANIC_API_KEY;

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://cryptopanic.com/api/v1',
  }),
  keepUnusedDataFor: 300, 
  endpoints: (builder) => ({
    getNews: builder.query<CryptoPanicPost[], Record<string, string | undefined>>({
      query: (params) => {
        const queryParams = new URLSearchParams({
          auth_token: API_KEY,
          public: 'true',
          kind: 'news',
          regions: 'en',
          ...params,
        });

        return `/posts/?${queryParams.toString()}`;
      },
      transformResponse: (response: CryptoPanicApiResponse) => response.results,
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
