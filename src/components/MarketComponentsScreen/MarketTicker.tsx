import React, { useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming, withSequence, withRepeat } from 'react-native-reanimated';
import { useGetGlobalDataQuery } from '../../redux/slices/globalApiSlice';
import { FontAwesome } from '@expo/vector-icons';
import Loader from '../UI/Loader';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const MarketTicker: React.FC = () => {
  const { data, error, isLoading } = useGetGlobalDataQuery();
  const translateX = useSharedValue(width);

  useEffect(() => {
    if (!isLoading && data) {
      translateX.value = withRepeat(
        withSequence(
          withTiming(-width, {
            duration: 13000,
            easing: Easing.linear,
          }),
          withTiming(width, {
            duration: 7000,
            easing: Easing.linear,
          })
        ),
        -1,
        false
      );
    }
  }, [isLoading, data, translateX]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    console.error('Error loading global data:', error);
    return <Text className="text-red-500">Error loading global data.</Text>;
  }

  const marketCap = data.data.total_market_cap.usd;
  const marketCapChangePercentage = data.data.market_cap_change_percentage_24h_usd.toFixed(2);
  const volume24h = data.data.total_volume.usd;
  const dominanceBTCValue = data.data.market_cap_percentage.btc;
  const dominanceETHValue = data.data.market_cap_percentage.eth;

  const getColor = (change: number) => (change > 0 ? 'text-green-500' : 'text-red-500');
  const getIconColor = (change: number) => (change > 0 ? '#10B981' : '#EF4444');
  const getArrowIcon = (change: number) => (change > 0 ? 'arrow-up' : 'arrow-down');

  const marketCapColor = getColor(parseFloat(marketCapChangePercentage));
  const marketCapIconColor = getIconColor(parseFloat(marketCapChangePercentage));
  const marketCapIcon = getArrowIcon(parseFloat(marketCapChangePercentage));

  return (
    <View className="h-10 overflow-hidden justify-center  border-cyan-900 relative">
      
      <LinearGradient
        colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 20,
          zIndex: 1,
        }}
      />

<LinearGradient
        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 20,
          zIndex:1
        }}
      />
      

    
      <Animated.View className="flex-row items-center space-x-4" style={animatedStyle}>
        <Text className="font-medium px-2 text-slate-500">
          Market Cap: <Text className={marketCapColor}>{`$${(marketCap / 1e12).toFixed(2)} T `}</Text>
          <FontAwesome name={marketCapIcon} size={16} color={marketCapIconColor} />
          <Text className={marketCapColor}>{` (${marketCapChangePercentage}%) | `}</Text>
          <Text>24h Vol: ${`${(volume24h / 1e9).toFixed(2)} B`}</Text>
        </Text>

        <Text className="font-medium px-2 text-slate-500">
          Dominance: <Text className="text-green">BTC {dominanceBTCValue.toFixed(2)}%</Text> |{' '}
          <Text className="text-blue">ETH {dominanceETHValue.toFixed(2)}%</Text>
        </Text>
      </Animated.View>
    </View>
  );
};

export default MarketTicker;
