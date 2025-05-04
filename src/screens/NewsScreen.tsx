import { Text, View, ScrollView } from 'react-native';
import React, { useState, useMemo } from 'react';
import MainHeaderWithLogoAndIcons from '../components/CustomHeaderComponents/MainHeaderWithLogoAndIcons';
import NewsList from '../components/NewsComponentsScreen/NewsList';
import NewsTabs from '../components/NewsComponentsScreen/NewsTabs';
import LatestNews from '../components/NewsComponentsScreen/LatestNews';
import Loader from '../components/UI/Loader';
import { useGetNewsQuery } from '../redux/slices/newsApiSlice';
import type { CryptoPanicPost } from '../types/types';
import { useDebounce } from 'use-debounce';

const FILTERS = ['hot', 'important', 'bullish', 'bearish', 'rising'] as const;
type NewsFilter = typeof FILTERS[number];

const NewsScreen = () => {
  const [filter, setFilter] = useState<NewsFilter>('hot');
  const [debouncedFilter] = useDebounce(filter, 400);


  const {
    data: allNews,
    isLoading: isLatestLoading,
    isError: latestError,
  } = useGetNewsQuery({ filter: debouncedFilter });

  const {
    data: filteredNews,
    isLoading: isFilteredLoading,
    isError: filteredError,
  } = useGetNewsQuery({ filter });

  const isLoading = isFilteredLoading || isLatestLoading;
  const hasError = filteredError || latestError;

  const firstLatestNews: CryptoPanicPost | undefined = useMemo(() => {
    const ONE_WEEK = 1000 * 60 * 60 * 24 * 14;
    const now = Date.now();

    return allNews
      ?.filter(post =>
        post.currencies?.length &&
        new Date(post.published_at).getTime() > now - ONE_WEEK
      )
      .sort(
        (a, b) =>
          new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
      )[0];
  }, [allNews]);

  if (isLoading) {
    return <Loader height={200} width={350} />;
  }

  // if (hasError) {
  //   return (
  //     <View className="flex-1 items-center justify-center">
  //       <Text className="text-red-500">Failed to load news.</Text>
  //     </View>
  //   );
  // }

  return (
    <>
      <MainHeaderWithLogoAndIcons />

      <View className="flex-1">
        <LatestNews item={firstLatestNews} />
        <NewsTabs
          filters={FILTERS}
          selected={filter}
          onSelect={setFilter as (filter: string) => void}
        />

        <ScrollView className="mt-4">
          <NewsList data={filteredNews} isLoading={isFilteredLoading} />
        </ScrollView>
      </View>
    </>
  );
};

export default NewsScreen;
