import { Text, View, ScrollView } from 'react-native';
import React, {useState} from 'react'
import MainHeaderWithLogoAndIcons from '../components/CustomHeaderComponents/MainHeaderWithLogoAndIcons';
import NewsList from '../components/NewsComponentsScreen/NewsList';
import NewsTabs from '../components/NewsComponentsScreen/NewsTabs';
import NewsCard from '../components/NewsComponentsScreen/NewsCard';
import { useGetNewsByFilterQuery } from '../redux/slices/newsApiSlice';

const FILTERS = ['hot', 'important','bullish','bearish','rising'] as const;

type NewsFilter = typeof FILTERS[number];

const NewsScreen = () => {
 const [filter, setFilter] = useState<NewsFilter>('hot');
 const {data, isLoading, error} = useGetNewsByFilterQuery(filter);


 if(error) {
  console.log(error)
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
          <NewsList data={data || []} isLoading={isLoading}/>
      </ScrollView>
    </View>
  </>
    
  )
}

export default NewsScreen