import React, { useMemo, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useGetMarketChartQuery } from '../../../redux/slices/marketDataSlice';
import { calculateMACD } from './divergenceUtils';

// Оптимизированный расчет RSI
const calculateRSI = (prices: number[], period = 14): number | null => {
  if (prices.length < period + 1) return null;

  const gains: number[] = [];
  const losses: number[] = [];

  for (let i = 1; i < prices.length; i++) {
    const difference = prices[i] - prices[i - 1];
    if (difference >= 0) {
      gains.push(difference);
      losses.push(0);
    } else {
      gains.push(0);
      losses.push(Math.abs(difference));
    }
  }

  let averageGain = gains.slice(0, period).reduce((acc, val) => acc + val, 0) / period;
  let averageLoss = losses.slice(0, period).reduce((acc, val) => acc + val, 0) / period;

  const rsiValues: number[] = [];
  for (let i = period; i < gains.length; i++) {
    averageGain = (averageGain * (period - 1) + gains[i]) / period;
    averageLoss = (averageLoss * (period - 1) + losses[i]) / period;

    const rs = averageLoss === 0 ? 100 : averageGain / averageLoss; 
    const rsi = 100 - 100 / (1 + rs);
    rsiValues.push(rsi);
  }

  return rsiValues[rsiValues.length - 1]; 
};

const DivergenceIndicator = ({
  id,
  rsiDays = 14,
  macdDays = 52,
  rsiPeriod = 14,
  macdPeriods = { short: 12, long: 26, signal: 9 },
  riskPercentage = 2,
}) => {
  // Запрос для RSI
  const { data: rsiData, error: rsiError, isLoading: isRSILoading } = useGetMarketChartQuery({ id, days: rsiDays });
  // Запрос для MACD
  const { data: macdData, error: macdError, isLoading: isMACDLoading } = useGetMarketChartQuery({ id, days: macdDays });

  // Обработка данных для RSI
  const rsiPrices = useMemo(() => {
    if (!rsiData || !Array.isArray(rsiData.prices)) return [];
    return rsiData.prices.map((price) => price[1]);
  }, [rsiData]);

  // Обработка данных для MACD
  const macdPrices = useMemo(() => {
    if (!macdData || !Array.isArray(macdData.prices)) return [];
    return macdData.prices.map((price) => price[1]);
  }, [macdData]);

  // Расчет RSI с вашей логикой
  const rsi = useMemo(() => {
    if (rsiPrices.length === 0) return null;
    return calculateRSI(rsiPrices, rsiPeriod);
  }, [rsiPrices, rsiPeriod]);

  // Расчет MACD
  const { macd, signal, histogram } = useMemo(() => {
    if (macdPrices.length === 0) return { macd: [], signal: [], histogram: [] };
    return calculateMACD(macdPrices, macdPeriods.short, macdPeriods.long, macdPeriods.signal);
  }, [macdPrices, macdPeriods]);

  // Анализ дивергенции
  useEffect(() => {
    if (macd.length < 2 || !rsi) return;

    const lastPrice = macdPrices[macdPrices.length - 1];
    const lastMACD = macd[macd.length - 1];
    const lastSignal = signal[signal.length - 1];
    const lastRSI = rsi;

    const divergenceDetected = (lastMACD > lastSignal && lastRSI < 30) || (lastMACD < lastSignal && lastRSI > 70);

    if (divergenceDetected) {
      const signalType = lastMACD > lastSignal ? 'BUY' : 'SELL';
      const stopLoss = signalType === 'BUY'
        ? lastPrice * (1 - riskPercentage / 100)
        : lastPrice * (1 + riskPercentage / 100);

      console.log('--- Divergence Detected ---');
      console.log(`Pair: ${id}/USD`);
      console.log(`Signal: ${signalType}`);
      console.log(`Stop Loss: ${stopLoss.toFixed(2)}`);
    }
  }, [signal, rsi, macd, macdPrices, riskPercentage]);

  if (isRSILoading || isMACDLoading) {
    return <Text>Loading...</Text>;
  }

  if (rsiError || macdError) {
    return <Text>{`Error: ${rsiError?.status || macdError?.status || 'Unknown error'}`}</Text>;
  }

  if (!rsi || !macd.length) {
    return <Text>No valid data available</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Divergence Indicator</Text>
      <Text style={styles.value}>MACD: {macd.slice(-1)[0]?.toFixed(2)}</Text>
      <Text style={styles.value}>Signal: {signal.slice(-1)[0]?.toFixed(2)}</Text>
      <Text style={styles.value}>Histogram: {histogram.slice(-1)[0]?.toFixed(2)}</Text>
      <Text style={styles.value}>RSI: {rsi.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    color: '#666',
  },
});

export default DivergenceIndicator;
