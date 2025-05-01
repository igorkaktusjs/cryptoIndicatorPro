import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { CryptoPanicPost } from '../../types/types'

import {useGetLatestNewsQuery} from '../../redux/slices/newsApiSlice'

interface Props {
    data: CryptoPanicPost[];
    isLoading: boolean;
}

const LatestNews = ({data,isLoading}:Props) => {

  return (
    <View className='flex-col justify-start px-10 w-full  mx-10 '>
      <Text className='text-start text-xl font-semibold'>Latest News</Text>
      {data.map((item)=> {
        return (
            <TouchableOpacity
                key={item.id}
                onPress={() => console.log(item)}
                className=' bg-backgroundTineLight'
            >
            <Text>{item.title}</Text>
            
            </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default LatestNews