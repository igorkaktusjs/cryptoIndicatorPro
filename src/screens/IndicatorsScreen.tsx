import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import MainHeaderWithLogoAndIcons from '../components/CustomHeaderComponents/MainHeaderWithLogoAndIcons';
import DescriptionOfTheIndicatorsScreen from '../components/IndicatorsComponentsScreen/DescriptionOfTheIndicatorsScreen';
import RSIIndicator from '../models/indicators/RSIIndicator';
import MACDIndicator from '../models/indicators/MACDIndicator';
import DivergenceIndicator from '../models/indicators/DivergenceIndicator/DivergenceIndicator';

const IndicatorsScreen = () => {
  return (
    <SafeAreaView>
      <MainHeaderWithLogoAndIcons />
      <DescriptionOfTheIndicatorsScreen />
      <ScrollView contentContainerStyle={styles.container}>
        <RSIIndicator id="bitcoin" days="14"  />
        <MACDIndicator id="bitcoin" days={50}  />
        <DivergenceIndicator id="bitcoin"  />
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
});

export default IndicatorsScreen;
