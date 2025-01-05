import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import WelcomeFirstScreen from '../components/welcomeComponents/WelcomeFirstScreen';
import MainHeader from '../components/MainHeader';
import TopIndicatarsWidget from '../components/HomeComponents/TopIndicatarsWidget';
import FeaturedTokens from '../components/HomeComponents/FeaturedTokens';



const HomeScreen: React.FC = () => {
  const insets =  useSafeAreaInsets();
  return (
        <View className='flex-1 color-background '>
          <MainHeader/>
          <TopIndicatarsWidget/>
          <FeaturedTokens/>
          <TopIndicatarsWidget/>
        </View>
  );
};

export default HomeScreen;