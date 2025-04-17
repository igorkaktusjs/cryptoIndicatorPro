import React from 'react';
import { View, Image, Text } from 'react-native';

const MainHeaderWithoutIcon: React.FC = () => {
  return (
    <View className="flex-row justify-center items-center px-5 bg-background">
      <Image
        source={require('../assets/image/CIP-logo.jpg')}
        className="h-12 w-12"
      />
      <Text className='text-black font-semibold m-2 '>CryptoIndicator</Text>
    </View>
  );
};

export default MainHeaderWithoutIcon;
