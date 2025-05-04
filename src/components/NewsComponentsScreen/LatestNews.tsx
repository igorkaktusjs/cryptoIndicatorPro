import React, { useCallback, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { formatRelativeTimeSimple } from '../../models/formatRelativeTimeSimple';
import { useNewsTags } from '../../hooks/useNewsTags';
import CoinsTagList from './CoinsTagList';
import { CryptoPanicPost } from '../../types/types';

interface Props {
  item?: CryptoPanicPost;
}

const LatestNews = ({ item }: Props) => {
  const navigation = useNavigation();
  const tags = useNewsTags(item?.currencies || []);

  const handleTagPress = useCallback((tag: { id: string }) => {
    navigation.navigate('TokenDetailsScreen', { tokenId: tag.id });
  }, [navigation]);

  const handleNewsPress = useCallback(() => {
    if (item) {
      navigation.navigate('NewsDetails', { item });
    }
  }, [navigation, item]);

  const relativeTime = useMemo(
    () => (item ? formatRelativeTimeSimple(item.published_at) : ''),
    [item?.published_at]
  );

  if (!item) {
    return <Text className="text-gray text-center mt-4">No latest news available.</Text>;
  }

  return (
    <View className="justify-start px-5">
      <Text className="text-xl font-bold mb-3 text-black">Latest News</Text>

      <TouchableOpacity
        onPress={handleNewsPress}
        className="h-44 justify-center bg-backgroundTineLight rounded-2xl p-4"
      >
        <Text className="text-base font-semibold text-black mb-2">{item.title}</Text>

        <View className="flex-row justify-between mb-2">
          <Text className="text-sm text-gray">{item.source.title}</Text>
          <Text className="text-xs text-gray">{relativeTime}</Text>
        </View>

        <CoinsTagList tags={tags} onPress={handleTagPress} />
      </TouchableOpacity>
    </View>
  );
};

export default LatestNews;
