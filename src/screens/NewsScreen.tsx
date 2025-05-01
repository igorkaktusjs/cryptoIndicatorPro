import { Text, View, ScrollView } from 'react-native';
import React, {useState} from 'react'
import MainHeaderWithLogoAndIcons from '../components/CustomHeaderComponents/MainHeaderWithLogoAndIcons';
import NewsList from '../components/NewsComponentsScreen/NewsList';
import NewsTabs from '../components/NewsComponentsScreen/NewsTabs';
import { useGetNewsByFilterQuery } from '../redux/slices/newsApiSlice';
import {useGetLatestNewsQuery} from '../redux/slices/newsApiSlice'

import LatestNews from '../components/NewsComponentsScreen/LatestNews';

const FILTERS = ['hot', 'important','bullish','bearish','rising'] as const;

type NewsFilter = typeof FILTERS[number];

const NewsScreen = () => {

 const [filter, setFilter] = useState<NewsFilter>('hot');
 const { data: filteredNews, isLoading: isFilteredLoading, error: filteredError } = useGetNewsByFilterQuery(filter);
 const { data: latestNews, isLoading: isLatestLoading, error: latestError } = useGetLatestNewsQuery();
 

 if(filteredError || latestError ) {
  console.log(filteredError , latestError )
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-red'>Failed to load news.</Text>
    </View>
  )
 }

  return (
  <>
    <MainHeaderWithLogoAndIcons/>
    <View className='flex-1 items-center justify-center'>
      
      <NewsTabs 
        filters={FILTERS} 
        selected={filter}
        onSelect={setFilter as (filter: string) => void}
        />
      <ScrollView mt-4>
          <NewsList data={filteredNews || []} isLoading={isFilteredLoading}/>
      </ScrollView>
    </View>
  </>
  
  )
}

export default NewsScreen