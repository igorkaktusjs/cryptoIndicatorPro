import React from 'react';
import { View, Text, Image } from 'react-native';

type Coin = {
  id: string;
  name: string;
  symbol: string;
  image?: string;
  thumb?: string;
};

type Props = {
  title: string;
  data?: Coin[];
  isLoading: boolean;
  error: boolean;
};

const CoinTile = ({ title, data, isLoading, error }: Props) => {
  if (isLoading) {
    return (
      <View className="space-y-2">
        {[...Array(5)].map((_, idx) => (
          <View key={idx} className="h-5 bg-gray-300 rounded-md w-3/4" />
        ))}
      </View>
    );
  }

  if (error || !data) {
    return <Text className="text-red-400 text-center">Failed to load</Text>;
  }

  return (
    <View>
      <Text className="text-primary font-semibold text-sm text-center mb-1">{title}</Text>
      {data.map((coin) => (
  <View
    key={coin.id}
    className="flex-row items-center justify-between mb-2 h-6"
  >
    <View className="flex-row items-center gap-2">
      <Image
        source={{ uri: coin.image ?? coin.thumb }}
        className="w-5 h-5"
        resizeMode="contain"
      />
      <Text
        numberOfLines={1}
        className="text-textPrimary text-sm max-w-[120px]"
      >
        {coin.name.length >= 12 || coin.symbol.length >= 5
          ? `${coin.symbol.toUpperCase()}`
          : `${coin.name} (${coin.symbol.toUpperCase()})`}
      </Text>
    </View>
  </View>
))}
    </View>
  );
};

export default CoinTile;
