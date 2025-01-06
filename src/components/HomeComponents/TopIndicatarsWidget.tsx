import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const TopIndicatarsWidget = () => {
  return (
    <View className='flex-row justify-between mx-20 my-2 px-10 py-1 rounded-16 shadow-sm bg-white items-center'>
        <View className='gap-1 justify-center items-center'>
            <Text className='color-primary font-semibold text-lg'>Market Cap</Text>
            <Text className='color-textPrimary font-bold'>3.33$</Text>
            <View className='flex-row gap-1 justify-center items-center'>
            <MaterialCommunityIcons name="arrow-down" size={24} color="red" />
                <Text className='color-red font-semibold'>4.46%</Text>
            </View>
        </View>
        <View className='gap-1 justify-center items-center'>
            <Text className='color-primary font-semibold text-lg'>Altcoin Index</Text>
            <Text className='color-textPrimary font-bold'>51/100</Text>
            <View className='flex-row gap-1 justify-center items-center'>
                <Text className='color-red font-semibold'>____.__</Text>
            </View>
        </View>
        <View>
        <View className='gap-1 justify-center items-center'>
            <Text className='color-primary font-semibold text-lg'>24h Vol</Text>
            <Text className='color-textPrimary font-bold'>3.33$</Text>
            <View className='flex-row gap-1 justify-center items-center'>
            <MaterialCommunityIcons name="arrow-down" size={24} color="red" />
                <Text className='color-red font-semibold'>4.46%</Text>
            </View>
        </View>
        </View>
        
    </View>
  )
}

export default TopIndicatarsWidget