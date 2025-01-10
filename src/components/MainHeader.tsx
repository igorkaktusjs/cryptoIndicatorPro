import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const MainHeader: React.FC<{ onLanguagePress: () => void }> = ({ onLanguagePress }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-row justify-between items-center px-5">
      <TouchableOpacity onPress={onLanguagePress}>
        <MaterialIcons name="language" size={32} color="gray" />
      </TouchableOpacity>
      <Image
        source={require('../assets/image/CIP-logo.jpg')}
        className='h-9 w-9'
      />
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <MaterialIcons name="notifications-none" size={32} color="gray" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MainHeader;
