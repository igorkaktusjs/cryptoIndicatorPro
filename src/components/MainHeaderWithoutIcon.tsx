import React from 'react';
import { View, Image } from 'react-native';

const MainHeaderWithoutIcon: React.FC = () => {
  return (
    <View className="flex-row justify-center items-center px-5">
      <Image
        source={require('../assets/image/CIP-logo.jpg')}
        className="h-12 w-12"
      />
    </View>
  );
};

export default MainHeaderWithoutIcon;
