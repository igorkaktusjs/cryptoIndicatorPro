import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons, AntDesign } from '@expo/vector-icons'; 
import MainHeaderWithLogoAndIcons from '../components/CustomHeaderComponents/MainHeaderWithLogoAndIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import DescriptionOfTheIndicatorsScreen from '../components/IndicatorsComponentsScreen/DescriptionOfTheIndicatorsScreen';

// Данные индикаторов с иконками
const indicators = [
  {
    name: 'Relative Strength Index (RSI)',
    description: 'RSI measures the speed and change of price movements, helping to determine overbought or oversold conditions of an asset. RSI values above 70 indicate overbought, below 30 indicate oversold.',
    icon: <MaterialIcons name="trending-up" size={24} color="black" />, // Иконка для RSI
  },
  {
    name: 'Moving Average Convergence Divergence (MACD)',
    description: 'MACD evaluates the relationship between two moving averages of the price, helping to identify changes in strength, direction, momentum, and duration of a trend.',
    icon: <FontAwesome name="line-chart" size={24} color="black" />, // Иконка для MACD
  },
  {
    name: 'Bollinger Bands',
    description: 'This indicator displays market volatility by showing upper and lower bands around a moving average. Widening bands indicate increased volatility, narrowing bands indicate decreased volatility.',
    icon: <MaterialIcons name="multiline-chart" size={24} color="black" />, // Иконка для Bollinger Bands
  },
  {
    name: 'Fibonacci Levels',
    description: 'Used to identify potential support and resistance levels based on Fibonacci ratios, helping to predict possible price retracements.',
    icon: <FontAwesome name="area-chart" size={24} color="black" />, // Иконка для Fibonacci Levels
  },
  {
    name: 'Ichimoku Cloud',
    description: 'Provides information on trend directions, support and resistance levels, and potential reversal points, combining several lines in one indicator.',
    icon: <AntDesign name="cloud" size={24} color="black" />, // Иконка для Ichimoku Cloud
  },
  {
    name: 'On-Balance Volume (OBV)',
    description: 'OBV links trading volume to price movement, helping to determine the strength of a trend and confirm price movements.',
    icon: <FontAwesome name="exchange" size={24} color="black" />, // Иконка для OBV
  },
];

const IndicatorCard = ({ indicator }) => (
  <View style={styles.card}>
    <View style={styles.iconContainer}>{indicator.icon}</View>
    <Text style={styles.title}>{indicator.name}</Text>
    <Text style={styles.description}>{indicator.description}</Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Explore Indicator</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Use Indicator</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const IndicatorsScreen = ({ userFavorites = [] }) => {
  return (
    <SafeAreaView>
      <MainHeaderWithLogoAndIcons />
      <DescriptionOfTheIndicatorsScreen />
      <ScrollView contentContainerStyle={styles.container}>
        {indicators.map(indicator => (
          <IndicatorCard key={indicator.name} indicator={indicator} />
        ))}
        {userFavorites.length > 0 && userFavorites.map(favorite => (
          <IndicatorCard key={favorite.name} indicator={favorite} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default IndicatorsScreen;
