import React from 'react';
import { View, Text } from 'react-native';
import PriceTabForCoinDetails from './PriceTabForCoinDetails';
import InfoTabForCoinDetails from './InfoTabForCoinDetails';

const PriceTab = () => (
  <PriceTabForCoinDetails/>
);

const SignalsTab = () => (
  <View>
    <Text>Signals Data</Text>
  </View>
);

const InfoTab = () => (
  <InfoTabForCoinDetails/>
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

export {
  PriceTab,
  SignalsTab,
  InfoTab,
  MarketsTab,
  NewsTab,
};
