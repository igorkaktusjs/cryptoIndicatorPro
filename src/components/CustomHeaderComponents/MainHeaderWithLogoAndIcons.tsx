import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';




const MainHeaderWithLogoAndIcons: React.FC = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView edges={['top']}  className="flex-row justify-between items-center px-5 my-2">
      <View className='flex-row justify-center items-center'>
      <Image
        source={require('../../assets/image/CIP-logo.jpg')}
        className="h-12 w-12"
      />
      <Text className='text-bold px-2 font-bold'>CryproIndicator</Text>
      </View>
      <View className='flex-row gap-5'>
        <TouchableOpacity>
        <FontAwesome5 name="star" size={24} color="gray" />
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <MaterialIcons name="currency-exchange" size={24} color="gray" /> 
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <MaterialIcons name="search" size={32} color="gray" />
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainHeaderWithLogoAndIcons;
