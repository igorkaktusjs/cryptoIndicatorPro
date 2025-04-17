import React from 'react';
import { View, Text, Image } from 'react-native';
import { useGetTrendingCoinsQuery } from '../../../redux/slices/globalApiSlice';

interface TradingTileProps {
  title: string;
}

const TrendingTile: React.FC<TradingTileProps> = ({ title }) => {
  const { data, isLoading, error } = useGetTrendingCoinsQuery();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading trending coins</Text>;

  return (
    <View>
      <Text className="text-center font-sm text-primary">{title}</Text>
      {data.map((coin) => (
        <View
          key={coin.id}
          className="flex-row items-center  my-[6px]"
        >
          <Image
            source={{ uri: coin.thumb }}
            className="w-5 h-5 mr-1"
            resizeMode="contain"
          />
          <Text className="text-sm font-normal text-black">
            {coin.name.length > 10
              ? `(${coin.symbol.toUpperCase()})`
              : `${coin.name} (${coin.symbol.toUpperCase()})`}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default TrendingTile;
