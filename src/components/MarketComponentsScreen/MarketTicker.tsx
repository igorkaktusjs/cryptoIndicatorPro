import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming, withSequence, withRepeat } from 'react-native-reanimated';
import { useGetGlobalDataQuery } from '../../redux/slices/cryptoApiSlice';

const { width } = Dimensions.get('window');

const MarketTicker: React.FC = () => {
  const { data, error, isLoading } = useGetGlobalDataQuery();
  const translateX = useSharedValue(width);

  useEffect(() => {
    if (!isLoading && data) {
      translateX.value = withRepeat(
        withSequence(
          withTiming(-width, {
            duration: 12000,
            easing: Easing.linear,
          }),
          withTiming(width, {
            duration: 15000,
            easing: Easing.linear,
          })
        ),
        -1,
        false
      );
    }
  }, [isLoading, data, translateX]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    console.error('Error loading global data:', error);
    return <Text>Error loading global data.</Text>;
  }

  const marketCap = `$${(data.data.total_market_cap.usd / 1e12).toFixed(2)} T`;
  const volume24h = `$${(data.data.total_volume.usd / 1e9).toFixed(2)} B`;
  const dominanceBTC = `${data.data.market_cap_percentage.btc.toFixed(2)}%`;
  const dominanceETH = `${data.data.market_cap_percentage.eth.toFixed(2)}%`;

  const tickerText = `Market Cap: ${marketCap} | 24h Vol: ${volume24h} | Dominance: BTC ${dominanceBTC}, ETH ${dominanceETH}   `;
  const tickerTextMarketCapWithVol = `Market Cap ${marketCap} | 24h Vol: ${volume24h}`;
  const tickerTextWithDominance = `Dominance: BTC ${dominanceBTC} | ETH ${dominanceETH}`;

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedView, animatedStyle]}>
        <Text style={styles.text}>{tickerTextMarketCapWithVol}</Text>
        <Text style={styles.text}>{tickerTextWithDominance}</Text>
        <Text style={styles.text}>{tickerTextMarketCapWithVol}</Text>
        <Text style={styles.text}>{tickerTextWithDominance}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  animatedView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});

export default MarketTicker;
