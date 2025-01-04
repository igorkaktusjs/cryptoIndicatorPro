import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useAssets } from 'expo-asset';
import { Video, ResizeMode } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import {FontAwesome5, FontAwesome6} from '@expo/vector-icons/';



const WelcomeFirstScreen = () => {

  const [assets] = useAssets([require('../../assets/videos/introCIP2.mp4')]);
  const navigation = useNavigation();

  const handlePressNext = () => {
    navigation.navigate('WelcomeSecondScreen');
  }


  return (
    <View style={styles.container}>
      {assets && (
        <Video
          resizeMode={ResizeMode.COVER}
          isMuted
          //isLooping
          //shouldPlay
          source={{ uri: assets[0].uri }}
          style={styles.video}
        />
      )}
      <View className='mt-35 p-20 justify-normal' >
        <Text className='text-blue-200 font-bold text-[28px] text-center lowercase'>
            Welcome to the Crypto Indicator App
        </Text>
      </View>

      <View className=' justify-center p-10 gap-5'>
        <Text className=' text-blue-200 font-bold text-[28px] text-center lowercase'>Select tokens to work </Text>
            <TouchableOpacity className=' bg-blue-300 rounded-md px-16' onPress={handlePressNext}>
                <View className='flex-row justify-center gap-5 p-2'>
                    <FontAwesome5 name="ethereum" size={24} color="black" />
                    <FontAwesome5 name="bitcoin" size={24} color="black" />
                    <FontAwesome6 name="litecoin-sign" size={24} color="black"/>
                </View>
            
            </TouchableOpacity>
      </View>

      <View className='p-0 h-15 rounded-full justify-center items-center bg-blue-500'>
        <TouchableOpacity className='bg-blue-500 rounded-lg px-16' onPress={handlePressNext}>
            <Text className='text-blue-200 font-bold text-[28px] text-center lowercase'>Next</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity className='bg-blue-500 rounded-lg px-16' onPress={handlePressNext}>
            <Text className='text-blue-200 font-bold text-[28px] text-center lowercase'>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
});

export default WelcomeFirstScreen;
