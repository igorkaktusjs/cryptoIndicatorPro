import React from 'react';
import { View, Text, Image } from 'react-native';
import { useGetTopCoinsForLosersQuery } from '../../../redux/slices/globalApiSlice';

type Props = {
  title: string;
  type: string;
};


const CategoryTile: React.FC<Props> = ({ title, type }) => {
  const { data, isLoading, error } = useGetTopCoinsForLosersQuery({type});

  if (isLoading) return <Text className="text-center text-gray-400">Loading...</Text>;

  if (error) return <Text className="text-center text-red-400">Failed to load data</Text>;

  return (
    <View className="px-4 py-2">
      <Text className="text-center font-sm text-primary text-sm mb-2">{title}</Text>
      {data?.map((coin) => (
        <View
          key={coin.id}
          className="flex-row items-center justify-between mb-3"
        >
          <View className="flex-row items-center space-x-2 gap-1">
            <Image
              source={{ uri: coin.image }}
              className="w-5 h-5"
              resizeMode="contain"
            />
            <Text className="text-sm text-black">
              {coin.name.length > 13
                ? `(${coin.symbol.toUpperCase()})`
              : `${coin.name} (${coin.symbol.toUpperCase()})`
              } 
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default CategoryTile;
