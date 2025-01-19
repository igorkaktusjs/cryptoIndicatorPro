import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useGetMarketChartQuery } from '../../redux/slices/marketDataSlice';
import { calculateEMA, calculateMACD } from './DivergenceIndicator/divergenceUtils';

const MACDIndicator = ({ id, days }) => {
  const { data, error, isLoading } = useGetMarketChartQuery({ id, days });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    const errorMessage = error.status
      ? `Error: ${error.status} ${error.data?.error || ''}`
      : `Error: ${error}`;
    console.error('API Error:', errorMessage);
    return <Text>{errorMessage}</Text>;
  }

  if (!data || !data.prices || !Array.isArray(data.prices)) {
    //console.warn('Invalid data structure:', data);
    return <Text>No data available</Text>;
  }

  const prices = data.prices.map((price) => price[1]);
  //console.log('Prices:', prices);

  const { macd, signal, histogram, } = calculateMACD(prices);
  //console.log('MACD Data:', { macd, signal, histogram });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MACD Indicator</Text>
      <Text style={styles.value}>MACD: {macd.slice(-1)[0]?.toFixed(2) || 'N/A'}</Text>
      <Text style={styles.value}>Signal: {signal.slice(-1)[0]?.toFixed(2) || 'N/A'}</Text>
      <Text style={styles.value}>Histogram: {histogram.slice(-1)[0]?.toFixed(2) || 'N/A'}</Text>
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

export default MACDIndicator;
