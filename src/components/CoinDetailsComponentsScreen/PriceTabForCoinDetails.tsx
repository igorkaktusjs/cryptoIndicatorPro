import React, { useMemo } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons/";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useGetTop100ByMarketCapQuery } from "../../redux/slices/binanceApiSlice";
import MarketChartForCoinDetails from "./MarketChartForCoinDetails";
import HistoricalData from "./HistoricalData";
import Statistics from "./Statistics";

const PriceTabForCoinDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params;

  const { data: coinData } = useGetTop100ByMarketCapQuery();
  const coin = useMemo(
    () => coinData?.find((c) => c.symbol.toLowerCase() === id.toLowerCase()),
    [coinData, id]
  );
  return (
    <View className="">
      <View className="flex-row justify-between items-center py-2 border-b-hairline border-gray">
        <View>
          <Text className="text-3xl font-bold">
            ${coin.price.toLocaleString()}
          </Text>
          <Text
            className={`text-lg  font-semibold pl-4 ${
              coin.change < 0 ? "text-red" : "text-green"
            }`}
          >
            {coin.change.toFixed(2)}%
          </Text>
        </View>

        <View className="">
          <View className="my-2">
            <Text className="text-md text-gray font-semibold">Market Cap</Text>
            <Text className="text-md text-black font-medium">${coin.marketCap}</Text>
          </View>
        <View>
                <Text className="text-md text-gray font-semibold">Price change 24h</Text>
                <Text className="text-md text-black font-medium">${coin.price_change_24h.toFixed(2)}</Text>
          </View>
        </View>
        <View >
        <View className="my-2">
            <Text className="text-md text-gray font-semibold">High 24h</Text>
            <Text className="text-md text-black font-medium">${coin.high_24h}</Text>
          </View>
              <View className="">
                <Text className="text-md text-gray font-semibold">Low 24h</Text>
                <Text className="text-md text-black font-medium">${coin.low_24h}</Text>
              </View>
          </View>
      </View>
      <View>
        <MarketChartForCoinDetails />
        <View>
        <HistoricalData data={coin}/>
        <Statistics data={coin}/>
        </View>
      </View>
    </View>
  );
};

export default PriceTabForCoinDetails;
