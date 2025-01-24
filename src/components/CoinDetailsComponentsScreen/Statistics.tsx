import { View, Text } from 'react-native'
import React from 'react'
import formatDateWithDaysAgo from "../../models/formatDateWithDaysAgo";

const Statistics = ({data}) => {

    const isNegativeMarketCap = data.market_cap_change_24h > data.market_cap;
    const isNegativeAtl = data.atl_change_percentage < 0;

  return (
    <View className='my-5 p-4 border-hairline border-zinc-300 rounded-md '>
      <View><Text className='text-lg color-black font-bold'>Statistics</Text></View>

      <View className="gap-6">
        <View className="border-b-hairline border-zinc-300 py-2 flex-row justify-between">
        <View>
            <Text className="text-md text-gray font-semibold">
              Rank
            </Text>
            <View className="flex-row gap-1 items-center">
              <Text className="text-lg text-black font-medium">
                 № {data.rank}
              </Text>
              </View>
          </View>
        <View>
            <Text className="text-md text-gray font-semibold">
              Market Cap
            </Text>
            <View className="flex-row gap-1 items-center">
              <Text className="text-lg text-black font-medium">
                ${data.marketCap}
              </Text>
              <Text
                className={
                    isNegativeMarketCap
                    ? "color-red font-bold"
                    : "color-green font-bold"
                }
              >
                {isNegativeMarketCap ? "↓" : "↑"}
              </Text>
              <Text className={isNegativeMarketCap ? "color-red" : "color-green"}>
                {data.market_cap_change_percentage_24h}%
              </Text>
            </View>
            <View className="flex-wrap">
            <Text className={isNegativeMarketCap ? "color-red font-light text-md" : "color-green font-light text-md"}>
                {data.market_cap_change_24h}
              </Text>
            </View>
          </View>
          
          </View>

          <View className="gap-6">
        <View className=" py-2 flex-row justify-between">
        <View className='items-center justify-center'>
            <Text className="text-md text-gray font-semibold">
              Circulating supply
            </Text>
            <View className="flex-row gap-1 items-center">
              <Text className="text-lg text-black font-medium">
                  {data.circulating_supply}
              </Text>
              </View>
          </View>
        <View className='items-center justify-center'>
            <Text className="text-md text-gray font-semibold">
            Total Supply
            </Text>
            <View className="flex-row gap-1 items-center">
              <Text className="text-lg text-black font-medium">
                {data.total_supply}
              </Text>
            </View>
          </View>
          {data.max_supply !== '?' && 
            <View className='items-center justify-center'>
            <Text className="text-md text-gray font-semibold">
            Max Supply
            </Text>
            <View className="flex-row gap-1 items-center justify-center">
              <Text className="text-lg text-black font-medium">
                {data.max_supply}
              </Text>
            </View>
          </View>
          }
          
          </View>
          </View>

          </View>
    </View>
  )
}

export default Statistics;