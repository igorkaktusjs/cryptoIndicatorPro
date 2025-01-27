import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import {  useGetTop100ByMarketCapQuery } from '../redux/slices/coinsApiSlice';
import MainHeaderForSinglePage from '../components/CustomHeaderComponents/MainHeaderForSinglePage';
import TabsForCoinDetalis from '../components/CoinDetailsComponentsScreen/TabsForCoinDetalis';

import {
  PriceTab,
  SignalsTab,
  InfoTab,
  MarketsTab,
  NewsTab,
  
} from '../components/CoinDetailsComponentsScreen/Tabs'; 

const CoinDetailsScreen = () => {

    const tabs = [
        { key: 'price', label: 'Price', component: <PriceTab /> },
        { key: 'signals', label: 'Signals', component: <SignalsTab /> },
        { key: 'info', label: 'Info', component: <InfoTab /> },
        { key: 'markets', label: 'Markets', component: <MarketsTab /> },
        { key: 'news', label: 'News', component: <NewsTab /> },
      ];

  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params;

  
  const { data: coinData } = useGetTop100ByMarketCapQuery();
  const coin = useMemo(() => coinData?.find((c) => c.symbol.toLowerCase() === id.toLowerCase()), [coinData, id]);

  if (!coin) {
    return (
      <View className="flex items-center justify-center h-full">
        <Text className="text-lg text-red">Token not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex p-4">
      <MainHeaderForSinglePage/>
      <TabsForCoinDetalis tabs={tabs} coinId={id}/>
      <View className="m-2 bg-card p-4 rounded-md">
        <Text className="text-sm text-gray">
          Data provided by CoinGecko. Displayed as is without warranties or guarantees.
        </Text>
        <TouchableOpacity>
          <Text className="text-primary">Learn more about risks</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CoinDetailsScreen;
