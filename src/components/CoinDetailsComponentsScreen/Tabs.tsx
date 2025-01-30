import React from 'react';
import { View, Text } from 'react-native';
import PriceTabForCoinDetails from './PriceTabForCoinDetails';
import InfoTabForCoinDetails from './InfoTabForCoinDetails';
import MarketsTabForCoinsDetails  from './MarketsTabForCoinsDetails'
import SignalsTabForCoinDetail from './SignalsTabForCoinDetail';
const PriceTab = () => (
  <PriceTabForCoinDetails/>
);

const SignalsTab = () => (
  <SignalsTabForCoinDetail/>
);

const InfoTab = () => (
  <InfoTabForCoinDetails/>
);

const MarketsTab = () => (
  <MarketsTabForCoinsDetails />
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
