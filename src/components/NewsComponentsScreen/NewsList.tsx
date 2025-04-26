import { Text, View, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

import { CryptoPanicPost } from '../../types/types';

interface Props {
  data: CryptoPanicPost[];
  isLoading: boolean;
}

const NewsList = ({data, isLoading}: Props) => {
    if(isLoading){
        return <Text className='text-gray'>loading...</Text>
    }
    console.log(data);
  return (
    <View className='gap-4'>
      {data.map((item) => (
        <TouchableOpacity key={item.url} onPress={() => Linking.openURL(item.url)}>
            <View className='bg-background p-3 rounded-xl'>
                <Text className='font-semibold text-black mb-1'>{item.title}</Text>
                <Text className='text-xs text-gray'>{item.source.title}</Text>
                <Text className='text-[10px] text-gray mt-1'>{new Date(item.published_at).toLocaleString()}</Text>
            </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default NewsList