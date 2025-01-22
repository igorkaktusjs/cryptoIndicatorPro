import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import Loader from '../UI/Loader';
import { toggleFavorite } from '../../redux/slices/usersSlice';

const defaultTokens = [
  { id: 'BTC', name: 'Bitcoin', lastPrice: '$50,000', dayChange: '+5%', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png' },
  { id: 'ETH', name: 'Ethereum', lastPrice: '$4,000', dayChange: '+3%', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png' },
  { id: 'SOL', name: 'Solana', lastPrice: '$20', dayChange: '-2%', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png' },
  { id: 'XRP', name: 'Ripple', lastPrice: '$1', dayChange: '-1%', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png' },
];

const TokenList = () => {
  const { favorites } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const combinedTokens = [
    ...favorites.map((id) => defaultTokens.find((token) => token.id === id)!),
    ...defaultTokens.filter((token) => !favorites.includes(token.id)).slice(0, 5 - favorites.length),
  ];

  return (
    <View className="flex p-4">
      <FlatList
        data={combinedTokens}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-row justify-between items-center p-2 ml-8">
            <View className="flex-row w-1/3 items-center gap-2">
              <Image source={{ uri: item.image }} className="h-9 w-9 my-1" />
              <Text className="text-lg uppercase font-semibold text-blue">{item.name}</Text>
            </View>
            <View className="w-1/3 items-center">
              <Text className="text-base text-textPrimary font-bold">{item.lastPrice}</Text>
            </View>
            <View className="w-1/3 items-center">
              <Text
                className={`text-base font-bold ${
                  item.dayChange.startsWith('-') ? 'text-red' : 'text-green'
                }`}
              >
                {item.dayChange}
              </Text>
            </View>
            <TouchableOpacity
              className="p-2"
              onPress={() => dispatch(toggleFavorite(item.id))}
            >
              <Text className={favorites.includes(item.id) ? 'text-yellow-500' : 'text-gray-500'}>
                ★
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TokenList;
