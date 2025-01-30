import React, { useCallback, memo } from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useGetCoinTickersQuery } from '../../redux/slices/coinsApiSlice';
import { FlashList } from '@shopify/flash-list';
import Loader from '../UI/Loader';

const MarketsTabForCoinsDetails = () => {
  const route = useRoute();
  const { id, coinName } = route.params as { id: string; coinName: string };

  const { data, error, isLoading } = useGetCoinTickersQuery(coinName.toLowerCase());

  const formatName = (name: string, maxLength: number = 9) => {
    return name.length > maxLength ? `${name.slice(0, maxLength)}` : name;
  };

  const formatNumber = useCallback((num: number) => num.toLocaleString('en-US', { maximumFractionDigits: 2 }), []);

  const renderItem = useCallback(({ item, index }) => {
    return <MarketItem item={item} index={index} />;
  }, []);

  if (isLoading) return <Loader />;
  if (error)
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500 text-lg">Failed to load markets.</Text>
      </View>
    );

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-xl font-bold mb-4">{`${coinName} Markets`}</Text>
      <FlashList
        data={data}
        renderItem={renderItem}
        estimatedItemSize={70} 
        keyExtractor={(item, index) => `${item.name}-${item.base}-${item.target}-${index}`}
        getItemType={() => 'market-item'} 
      />
    </View>
  );
};

const MarketItem = memo(({ item, index }) => {
  const { base, target, converted_last, last, volume, trust, logo, name, price } = item;
  const trustColor = trust === 'green' ? 'bg-green' : trust === 'red' ? 'bg-red' : 'bg-gray-400';

  console.log(trust);

  const formatName = (name: string, maxLength: number = 9) => {
    return name.length > maxLength ? `${name.slice(0, maxLength)}...` : name;
  };

  return (
    
    <View className="flex-row justify-beetwen items-center bg-white p-4 mb-3 rounded-lg shadow-sm">
      <View className="flex-row items-center justify-start">
        <Text className="w-7 font-bold">{index + 1}</Text>
        <Image source={{ uri: logo }} className="w-8 h-8 rounded-full mx-3" resizeMode="contain" />
      </View>
    
      <View className="flex-col items-start justify-start w-1/5">
        <Text className="flex-1 pt-1">{formatName(name, 9)}</Text>
        <Text className="flex-1 text-center text-xs">{`${base}/${target}`}</Text>
      </View>

      <View className='flex-col px-5  flex-1 justify-center  items-center w-1/4'>
        <Text className="text-sm">${volume.toLocaleString('en-US', { maximumFractionDigits: 2 })}</Text>
        <Text className="text-sm">${price.toFixed(2)}</Text>
      </View>
      
      <View className="flex-row justify-center items-center">
        <View className={`w-3 h-3 rounded-full ${trustColor}`} />
      </View>
    </View>
  );
});

export default MarketsTabForCoinsDetails;
