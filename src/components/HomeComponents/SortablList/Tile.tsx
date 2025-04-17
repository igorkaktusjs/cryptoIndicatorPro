import React from 'react';
import { View, StyleSheet } from 'react-native';
import CoinTile from './CoinTile';
import { useGetTrendingCoinsQuery, useGetTopCoinsByCategoryQuery, useGetTopCoinsForLosersQuery } from '../../../redux/slices/globalApiSlice';
import { SIZE } from './Config';

interface TileProps {
  id: 'trending' | 'topGainers' | 'topLosers' | 'recentlyAdded';
  onLongPress?: () => void;
}

const styles = StyleSheet.create({
  container: {
    marginVertical:5,
    marginLeft: 6,
    width: SIZE - 18,
    height: 125,
    backgroundColor: '#eae7dc',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    padding: 5,
    alignItems: 'center',
  },
});

const Tile = ({ id }: TileProps) => {
  let query, title;

  switch (id) {
    case 'trending':
      query = useGetTrendingCoinsQuery();
      title = '🔥 Trending';
      break;
    case 'topGainers':
      query = useGetTopCoinsByCategoryQuery({ category: 'decentralized-finance-defi' });
      title = '🚀 Top DeFi';
      break;
    case 'topLosers':
      query = useGetTopCoinsForLosersQuery({ type: 'losers' });
      title = '📉 Top Losers';
      break;
    case 'recentlyAdded':
      query = useGetTopCoinsByCategoryQuery({ category: 'artificial-intelligence' });
      title = '🧠 Top AI';
      break;
    default:
      query = { data: [], isLoading: false, error: false };
      title = '';
  }

  const { data, isLoading, error } = query;

  return (
    <View style={styles.container} pointerEvents="none">
      <CoinTile title={title} data={data} isLoading={isLoading} error={!!error} />
    </View>
  );
};

export default Tile;
