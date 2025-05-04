// components/NewsCard.tsx
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';
import { CryptoPanicPost } from '../../types/types';
import { useNewsTags } from '../../hooks/useNewsTags';
import CoinsTagList from './CoinsTagList';
import { formatRelativeTimeSimple } from '../../models/formatRelativeTimeSimple';

interface Props {
  item: CryptoPanicPost;
}

const NewsCard = ({ item }: Props) => {
  const navigation = useNavigation();
  const tags = useNewsTags(item.currencies || []);

  return (
    <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(item.url)}>
      <View className="bg-backgroundTineLight p-3 rounded-xl mx-8 mb-4">
        <Text className="font-semibold text-black mb-1 mx-2">{item.title}</Text>

        <View className="flex-row justify-start items-center gap-2 mx-2">
          <Text className="text-sm text-red font-semibold">{item.source.title}</Text>
          <Text className="text-xs text-gray">
            {formatRelativeTimeSimple(item.published_at)}
          </Text>
        </View>

        <CoinsTagList
          tags={tags}
          className="mt-1"
          onPress={(tag) =>
            navigation.navigate('TokenDetailsScreen', { tokenId: tag.id })
          }
        />
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(NewsCard);
