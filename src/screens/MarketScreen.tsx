import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useGetTop100ByMarketCapQuery } from '../redux/slices/coinsApiSlice';
import HorizontalMenu from '../components/MarketComponentsScreen/HorizontalMenu';
import MarketListItem from '../components/MarketComponentsScreen/MarketListItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainHeaderWithLogoAndIcons from '../components/CustomHeaderComponents/MainHeaderWithLogoAndIcons';
import MarketTicker from '../components/MarketComponentsScreen/MarketTicker';
import Loader from '../components/UI/Loader';


const MarketScreen: React.FC = () => {
  const { data, error, isLoading } = useGetTop100ByMarketCapQuery();
  const [selectedItem, setSelectedItem] = useState<string>('Market Cap');
  const [sortType, setSortType] = useState<string>('marketCap');
  const [sortedData, setSortedData] = useState<any[]>([]);

  const handleSelectItem = useCallback((item: string) => {
    setSelectedItem(item);
    setSortType(item === 'Price' ? 'price' : item === '24H' ? 'change' : 'marketCap');
  }, []);

  useEffect(() => {
    if (!data) return;
    const sorted = [...data].sort((a, b) => {
      if (sortType === 'price') {
        return parseFloat(b.price) - parseFloat(a.price);
      } else if (sortType === 'change') {
        return b.change - a.change;
      } else {
        return b.marketCap - a.marketCap;
      }
    });
    setSortedData(sorted);
  }, [data, sortType]);

  const renderItem = useCallback(
    ({ item }: { item: any }) => (
      <MarketListItem
        rank={item.rank}
        symbol={item.symbol}
        price={item.price}
        change={item.change}
        marketCap={item.marketCap}
        imageUrl={item.imageUrl}
      />
    ),
    []
  );

  if (isLoading) {
    return <Loader height={300}/>
  }

  if (error) {
    console.error('Error loading market data:', error);
    return <Text>Error loading market data.</Text>;
  }

  const items = ['Market Cap', 'Price', '24H'];

  return (
    <View  className="flex-1 px-4 bg-background mb-[20px]">
      <MainHeaderWithLogoAndIcons/>
      <MarketTicker/>
      <HorizontalMenu
        items={items}
        selectedItem={selectedItem}
        onSelectItem={handleSelectItem}
      />
      <FlatList
        data={sortedData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item.symbol}-${item.rank}`}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default MarketScreen;
