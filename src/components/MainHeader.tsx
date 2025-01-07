import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const MainHeader = () => {

  const navigation = useNavigation();

    const insets = useSafeAreaInsets();

  return (
    <View className='flex-row items-center px-20 justify-between' style={{marginTop: insets.top}}>
        <TouchableOpacity onPress={() => navigation.navigate('NotificationsScreen')}>
            <MaterialIcons name="language" size={32} color="gray" />
        </TouchableOpacity>
      <Image 
            source={require('../assets/image/CIP-logo.jpg')} 
            className='h-9 w-9' />
        <TouchableOpacity onPress={() => navigation.navigate('NotificationsScreen')}>
            <MaterialIcons name="notifications-none" size={32} color="gray" />
        </TouchableOpacity>
    </View>
  )
}

export default MainHeader

const styles = StyleSheet.create({})