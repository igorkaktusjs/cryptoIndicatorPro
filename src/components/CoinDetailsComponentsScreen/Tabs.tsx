import React from 'react';
import { View, Text } from 'react-native';
import PriceTabForCoinDetails from './PriceTabForCoinDetails';

const PriceTab = () => (
  <PriceTabForCoinDetails/>
);

const SignalsTab = () => (
  <View>
    <Text>Signals Data</Text>
  </View>
);

const InfoTab = () => (
  <View>
    <Text>Information about the Coin</Text>
  </View>
);

const MarketsTab = () => (
  <View>
    <Text>Market Listings</Text>
  </View>
);

const NewsTab = () => (
  <View>
    <Text>News related to the Coin</Text>
  </View>
);

const HistoricalDataTab = () => (
  <View>
    <Text>Historical Data for the Coin</Text>
  </View>
);

export {
  PriceTab,
  SignalsTab,
  InfoTab,
  MarketsTab,
  NewsTab,
  HistoricalDataTab,
};
