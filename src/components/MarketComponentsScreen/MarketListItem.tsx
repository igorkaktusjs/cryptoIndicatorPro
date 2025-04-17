import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';

interface MarketListItemProps {
  rank: number;
  symbol: string;
  price: number;
  change: number;
  marketCap: string;
  imageUrl: string;
}

const formatRank = (rank: number): string => {
  return rank < 10 ? `${rank}  ` : `${rank}`;
};

const MarketListItem: React.FC<MarketListItemProps> = ({
  rank,
  symbol,
  price,
  change,
  marketCap,
  imageUrl,
}) => {
  return (
    <View className="flex-row items-center p-2 my-2 rounded-md shadow-sm border-b-hairline">
      <Text className="text-16 font-semibold w-rank-fixed">{formatRank(rank)}</Text>
      <Image source={{ uri: imageUrl }} className="w-9 h-9 mx-8 text-center" />
      <Text className="text-10 flex-1">{`${symbol.trim()}`}</Text>
      <Text className="text-10 flex-1 text-left">{marketCap}</Text>
      <Text className="text-12 flex-1 text-center ">{`$${price.toFixed(2)}`}</Text>
      <Text className={`text-14 font-semibold flex-2 text-right ${change >= 0 ? 'text-green' : 'text-red'}`}>
        {change >= 0 ? '▲' : '▼'} {change.toFixed(2)}%
      </Text>
    </View>
  );
};

export default memo(MarketListItem);
