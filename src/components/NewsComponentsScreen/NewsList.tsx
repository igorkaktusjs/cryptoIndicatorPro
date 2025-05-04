import { Text } from 'react-native';
import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { CryptoPanicPost } from '../../types/types';
import NewsCard from './NewsCard';

interface Props {
  data: CryptoPanicPost[];
  isLoading: boolean;
}

const NewsList = ({ data, isLoading }: Props) => {
  if (isLoading) {
    return <Text className="text-gray text-center mt-4">Loading news...</Text>;
  }

  return (
    <FlashList
      data={data}
      renderItem={({ item }) => <NewsCard item={item} />}
      estimatedItemSize={150}
      keyExtractor={(item) => item.url}
      contentContainerStyle={{ paddingBottom: 16 }}
    />
  );
};

export default React.memo(NewsList);
