import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const MainHeader: React.FC<{ onLanguagePress: () => void }> = ({ onLanguagePress }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-row justify-between items-center px-5  border-b-hairline border-cyan-900 bg-background">
      <TouchableOpacity onPress={onLanguagePress}>
        <MaterialIcons name="language" size={32} color="#d35a35" />
      </TouchableOpacity>
      <View className='flex-col items-center justify-center'>
        <Image
        source={require('../assets/image/CIP-logo.jpg')}
        className='h-12 w-12'
        />
      <Text className='text-black font-semibold mt-1'>
        CryptoIndicator
      </Text>
      </View>
      
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <MaterialIcons name="notifications-none" size={32} color="#d35a35" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MainHeader;
