import { View, Text, Image, ScrollView, Dimensions, useWindowDimensions } from 'react-native';
import React, {useMemo} from 'react';
import { 
    useGetCoinDataByIdQuery,
    useGetCoinsListWithMarketDataQuery,
    useGetTop100ByMarketCapQuery,
    useGetCoinsMarketsQuery,
    useGetCoinByIdQuery
} from '../../redux/slices/coinsApiSlice';

import {useGetGlobalDataQuery} from '../../redux/slices/globalApiSlice'

import { useRoute } from '@react-navigation/native';
import Loader from '../UI/Loader';
import HistoricalData from './HistoricalData';

const InfoTabForCoinDetails = () => {
  const contentWidth = Dimensions.get('window').width;
  const { width } = useWindowDimensions();

  const route = useRoute();
  const { id, coinName, item } = route.params;

  

  const { data: coins, isLoading: isCoinsLoading, error: coinsError } =
    useGetCoinsListWithMarketDataQuery({ vs_currency: 'usd', order: 'market_cap_desc', per_page: 100, page: 1 });
    
    const { data: coinData, isLoading: isCoinDataLoading, error: coinDataError } = useGetCoinDataByIdQuery(item); //for desc data
    const { data: CoinById, isLoading: CoinByIdLoading } = useGetCoinByIdQuery(item);
    const { data: globalData, isLoading: globalLoading } = useGetGlobalDataQuery();
    const { data: coinsData, isLoading: coinsLoading } = useGetCoinsMarketsQuery();
    const {data: marketData, isLoading: isMarketLoading, error: marketDataError} = useGetTop100ByMarketCapQuery();

    console.log(globalData);


    if (globalLoading || coinsLoading || isCoinsLoading || isCoinDataLoading || isMarketLoading) return <Loader/>;
    if (!globalData || !coinsData) return <Text>Error loading data</Text>;

    const coinMarketData =  marketData?.find((c) => c.symbol.toLowerCase() === id.toLowerCase());
    const currentCoin = coins.find((coin) => coin.symbol ===id);
    const totalMarketCap = globalData.data.total_market_cap.usd;

    const CoinWithId = CoinById[0];

    const dominance = ((CoinWithId?.market_cap / totalMarketCap) * 100).toFixed(2);

  return (
    <ScrollView className="p-4">
      <View className='flex-1 border-hairline border-zinc-300 p-3 rounded-md mb-5 bg-zinc-100 gap-2'>
            <View className='flex-row items-center justify-between border-b-hairline border-zinc-200'>
                <Text className='font-bold text-lg color-gray'>Rank</Text>
                <Text className='font-semibold text-lg color-black'>№ {currentCoin.marketCapRank}</Text>
            </View>
            <View className='flex-row items-center justify-between border-b-hairline border-zinc-200'>
                <Text className='font-bold text-lg color-gray'>Market Cap</Text>
                <Text className='font-semibold text-lg color-black'>{coinMarketData.marketCap}</Text>
            </View>
            <View className='flex-row items-center justify-between border-b-hairline border-zinc-200'>
                <Text className='font-bold text-lg color-gray'>Circulating Supply</Text>
                <Text className='font-semibold text-lg color-black'>{coinMarketData.circulating_supply}</Text>
            </View>
            <View className='flex-row items-center justify-between border-b-hairline border-zinc-200'>
                <Text className='font-bold text-lg color-gray'>Max Supply</Text>
                <Text className='font-semibold text-lg color-black'>{coinMarketData.max_supply}</Text>
            </View>
            <View className='flex-row items-center justify-between border-b-hairline border-zinc-200'>
                <Text className='font-bold text-lg color-gray'>Total Supply</Text>
                <Text className='font-semibold text-lg color-black'>{coinMarketData.total_supply}</Text>
            </View> 
            <View className='flex-row items-center justify-between border-b-hairline border-zinc-200'>
                <Text className='font-bold text-lg color-gray'>Total Volume</Text>
                <Text className='font-semibold text-lg color-black'>{coinMarketData.total_volume}</Text>
            </View>  
            <View>

            <View className='flex-row items-center justify-between border-b-hairline border-zinc-200'>
                <Text className='font-bold text-lg color-gray'>Market Dominance</Text>
                <Text className='font-semibold text-lg color-black'>{dominance}%</Text>
            </View> 
    
      </View>
      </View>
      <HistoricalData data={coinMarketData} />
{/* Header */}
      <View className="flex-row items-center justify-start gap-4 mb-5 mt-5">
        <Image source={{ uri: coinMarketData.imageUrl  }} className="w-12 h-12" />
        <View>
          <Text className="text-lg font-bold">{coinMarketData.name}</Text>
          <Text className="text-sm text-gray-500">{coinMarketData.symbol.toUpperCase()}</Text>
        </View>
      </View>
      
      <View className="mb-4 border-hairline border-zinc-300 rounded-md p-3 bg-zinc-100">
        <Text className="text-sm text-gray-500 font-normal">
          {coinData?.description}
      </Text>
        
      </View>
    </ScrollView>
  );
};

export default InfoTabForCoinDetails;
