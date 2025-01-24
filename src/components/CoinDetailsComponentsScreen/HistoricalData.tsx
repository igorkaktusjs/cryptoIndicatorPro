import { View, Text } from "react-native";
import React from "react";
import formatDateWithDaysAgo from "../../models/formatDateWithDaysAgo";

const HistoricalData = ({ data }) => {
  const isNegativeAth = data.ath_change_percentage < 0;
  const isNegativeAtl = data.atl_change_percentage < 0;

  return (
    <View className="border-hairline rounded-md p-4 border-zinc-300 bg-zinc-100">
      <View>
        <Text className="text-lg font-bold color-black">Historical Data</Text>
      </View>

      <View className="gap-6">
        <View className="border-b-hairline border-zinc-300 py-2">
          <View>
            <Text className="text-md text-gray font-semibold">
              All Time High
            </Text>
            <View className="flex-row gap-1 items-center">
              <Text className="text-lg text-black font-medium">
                ${data.ath}
              </Text>
              <Text
                className={
                  isNegativeAth
                    ? "color-red font-bold"
                    : "color-green font-bold"
                }
              >
                {isNegativeAth ? "↓" : "↑"}
              </Text>
              <Text className={isNegativeAth ? "color-red" : "color-green"}>
                {data.ath_change_percentage.toFixed(2)}%
              </Text>
            </View>
            <View className="flex-wrap">
              <Text className="text-md text-gray font-light">
                {formatDateWithDaysAgo(data.ath_date)}
              </Text>
            </View>
          </View>
        </View>
        <View className="">
          <View>
            <Text className="text-md text-gray font-semibold">
              All Time Low
            </Text>
            <View className="flex-row gap-1 items-center">
              <Text className="text-lg text-black font-medium">
                ${data.atl}
              </Text>
              <Text
                className={
                  isNegativeAtl
                    ? "color-red font-bold"
                    : "color-green font-bold"
                }
              >
                {isNegativeAtl ? "↓" : "↑"}
              </Text>
              <Text className={isNegativeAtl ? "color-red" : "color-green"}>
                {data.atl_change_percentage.toFixed(1)}%
              </Text>
            </View>
            <View className="flex-wrap">
              <Text className="text-md text-gray font-light">
                {formatDateWithDaysAgo(data.atl_date)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HistoricalData;
