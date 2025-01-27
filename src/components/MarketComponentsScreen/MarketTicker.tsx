import React, { useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming, withSequence, withRepeat } from 'react-native-reanimated';
import { useGetGlobalDataQuery } from '../../redux/slices/globalApiSlice';

import { FontAwesome } from '@expo/vector-icons';
import Loader from '../UI/Loader';

const { width } = Dimensions.get('window');

const MarketTicker: React.FC = () => {
  const { data, error, isLoading } = useGetGlobalDataQuery();
  const translateX = useSharedValue(width);

  useEffect(() => {
    if (!isLoading && data) {
      translateX.value = withRepeat(
        withSequence(
          withTiming(-width, {
            duration: 15000,
            easing: Easing.linear,
          }),
          withTiming(width, {
            duration: 10000,
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
    return <Loader/>;
  }

  if (error) {
    console.error('Error loading global data:', error);
    return <Text>Error loading global data.</Text>;
  }

  const marketCap = data.data.total_market_cap.usd;
  const marketCapChangePercentage = data.data.market_cap_change_percentage_24h_usd.toFixed(2);
  const volume24h = data.data.total_volume.usd;

  const dominanceBTCValue = data.data.market_cap_percentage.btc;
  const dominanceETHValue = data.data.market_cap_percentage.eth;

  const getColor = (change: number) => (change > 0 ? 'green' : 'red');
  const getArrowIcon = (change: number) => (change > 0 ? 'arrow-up' : 'arrow-down');

  const marketCapColor = getColor(parseFloat(marketCapChangePercentage));
  const marketCapIcon = getArrowIcon(parseFloat(marketCapChangePercentage));

  const marketCapText = `Market Cap: $${(marketCap / 1e12).toFixed(2)} T (${marketCapChangePercentage}%)`;
  const volume24hText = `24h Vol: $${(volume24h / 1e9).toFixed(2)} B`;

  const dominanceBTCColor = dominanceBTCValue > dominanceETHValue ? 'green' : 'red';
  const dominanceETHColor = dominanceETHValue > dominanceBTCValue ? 'green' : 'red';

  const dominanceBTC = (
    <Text style={{ color: dominanceBTCColor }}>
      BTC {dominanceBTCValue.toFixed(2)}%
    </Text>
  );
  const dominanceETH = (
    <Text style={{ color: dominanceETHColor }}>
      ETH {dominanceETHValue.toFixed(2)}%
    </Text>
  );

  const tickerTextMarketCapWithVol = (
    <Text>
      <Text>Market Cap: </Text>
      <Text style={{ color: marketCapColor }}>{`$${(marketCap / 1e12).toFixed(2)} T `}</Text>
      <FontAwesome name={marketCapIcon} size={16} color={marketCapColor} />
      <Text style={{ color: marketCapColor }}>{` (${marketCapChangePercentage}%) | `}</Text>
      <Text>{volume24hText}</Text>
    </Text>
  );

  const tickerTextWithDominance = (
    <Text>
      Dominance: {dominanceBTC} | {dominanceETH}
    </Text>
  );

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
    height: 30,
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
