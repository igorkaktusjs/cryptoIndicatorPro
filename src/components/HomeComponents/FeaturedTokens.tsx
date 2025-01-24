import React, { useMemo } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useGetTop100ByMarketCapQuery } from '../../redux/slices/binanceApiSlice';
import { useSelector } from 'react-redux';
import Loader from '../UI/Loader';
import { useNavigation } from '@react-navigation/native';

const DEFAULT_TOKENS = ['btc', 'eth', 'sol', 'xrp']; 

const TokenList = () => {
  const { data: marketData, isLoading, error } = useGetTop100ByMarketCapQuery();
  const favorites = useSelector((state) => state.user.favorites); 

  const navigation = useNavigation();

  const displayedTokens = useMemo(() => {
    if (!marketData) return [];

    const favoriteTokens = marketData.filter((token) =>
      favorites.includes(token.symbol.toLowerCase())
    );

    const remainingTokens = DEFAULT_TOKENS.filter(
      (symbol) => !favoriteTokens.some((token) => token.symbol.toLowerCase() === symbol)
    )
      .slice(0, 5 - favoriteTokens.length) 
      .map((symbol) => marketData.find((token) => token.symbol.toLowerCase() === symbol))
      .filter(Boolean); 

    return [...favoriteTokens, ...remainingTokens].slice(0, 5); 
  }, [marketData, favorites]);

  if (isLoading) {
    return <Loader height={300} />;
  }

  if (error) {
    return (
      <View>
        <Text>Sorry, we got some issues with our server</Text>
      </View>
    );
  }

  return (
    <View className="flex p-4">
      <FlatList
        scrollEnabled={false}
        data={displayedTokens}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('CoinDetails', { id: item.symbol })}
            className="flex-row justify-between items-center p-2 ml-8">
            <View className="flex-row w-1/3 items-center gap-2">
              <Image source={{ uri: item.imageUrl }} className="h-9 w-9 my-1" />
              <Text className="text-lg uppercase font-semibold text-blue">
                {item.symbol}
              </Text>
            </View>
            <View className="w-1/3 items-center">
              <Text className="text-base text-textPrimary font-bold">
                ${item.price.toLocaleString()}
              </Text>
            </View>
            <View className="w-1/3 items-center">
              <Text
                className={`text-base font-bold ${
                  item.change < 0 ? 'text-red' : 'text-green'
                }`}
              >
                {item.change.toFixed(2)}%
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.symbol}
      />
      <TouchableOpacity
        className="mt-4 mx-auto px-6 py-1 rounded-16 opacity-85"
        onPress={() => {}}
      >
        <Text className="text-primary text-lg font-bold">View More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TokenList;
