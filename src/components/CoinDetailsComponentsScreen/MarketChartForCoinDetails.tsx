import { View, Text } from 'react-native'
import React from 'react'
import LineChart from '../HomeComponents/LineChart'

const MarketChartForCoinDetails = () => {
  return (
    <View className="mt-4 bg-card p-4 rounded-md border-hairline border-zinc-100 h-96 mb-5">
        <Text className="text-lg font-bold">Market Chart</Text>
        <Text className="text-gray text-sm">Graph coming soon</Text>
        <LineChart/>
      </View>
  )
}

export default MarketChartForCoinDetails;