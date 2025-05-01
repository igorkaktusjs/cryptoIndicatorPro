import { Text, View, Linking, TouchableOpacity, Image } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "@react-navigation/native";
import { CryptoPanicPost } from "../../types/types";
import CoinsTagList from "./CoinsTagList";
import { useGetCoinsMarketQuery } from "../../redux/slices/globalApiSlice";
import { formatRelativeTimeSimple} from "../../models/formatRelativeTimeSimple";


interface Props {
  data: CryptoPanicPost[];
  isLoading: boolean;
}

const NewsList = ({ data, isLoading }: Props) => {

  const navigation = useNavigation();

  if (isLoading) {
    return <Text className="text-gray">loading...</Text>;
  }

  return (
    <View className="gap-4 mx-8">
      {data.map((item) => {
        const currencies = item.currencies || [];
        const ids = currencies.map((c) => c.slug.toLocaleLowerCase());
        const symbols = currencies.map((c) => c.slug.toLowerCase());


        const { data: coinsData = [] } = useGetCoinsMarketQuery(symbols, {
          skip: currencies.length === 0,
        });

        const tags = currencies.map((currency) => {
          const coin = coinsData.find((c) => c.id === currency.slug.toLowerCase());
          return {
            id: currency.slug,
            label: currency.title,
            logo: coin?.image,
            priceChange24h: coin?.price_change_percentage_24h,
          };
        });

        return (
          <TouchableOpacity
            key={item.url}
            onPress={() => WebBrowser.openBrowserAsync(item.url)}
          >
            <View className="bg-backgroundTineLight p-3 rounded-xl">
              <Text className="font-semibold text-black mb-1 mx-2">{item.title}</Text>
                <View className="flex-row justify-start items-center gap-2 mx-2">
              <Text className="text-sm text-red font-semibold">{item.source.title}</Text>
              <Text className="text-xs text-gray">
                {formatRelativeTimeSimple(item.published_at)}
              </Text>
              </View>

              <CoinsTagList
                tags={tags}
                className="mt-1"
                onPress={(tag) =>
                  navigation.navigate('TokenDetailsScreen', { tokenId: tag.id })
                }
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default NewsList;
