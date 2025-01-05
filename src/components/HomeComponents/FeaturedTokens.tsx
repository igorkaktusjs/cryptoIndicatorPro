import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const featuredTokens = [
  { id: '1', name: 'Bitcoin', lastPrice: '$50,000', dayChange: '+5%', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png' },
  { id: '2', name: 'SOL', lastPrice: '$4,000', dayChange: '+3%', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png' },
  { id: '3', name: 'RENDEr', lastPrice: '$1', dayChange: '-2%', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png' },
  { id: '4', name: 'AR', lastPrice: '$1', dayChange: '-2%', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png' },
  { id: '5', name: 'FIT', lastPrice: '$1', dayChange: '-2%', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png' },
];

const TokenList = () => {
  return (
    <View className='flex p-4'>
    <FlatList
        scrollEnabled={false}
      data={featuredTokens}
      renderItem={({ item }) => (
        <TouchableOpacity className="flex-row justify-between items-center  p-2 ml-8">
          <View className="flex-row w-1/3 items-center gap-2">
            <Image source={{ uri: item.image }} className='h-9 w-9 my-1'/>
            <Text className="text-lg uppercase font-semibold text-blue">
              {item.name}
            </Text>
          </View>
          <View className="w-1/3 items-center">
            <Text className="text-base text-textPrimary font-bold">
              {item.lastPrice}
            </Text>
          </View>
          <View className="w-1/3 items-center">
            <Text className={`text-base font-bold ${item.dayChange.startsWith('-') ? 'text-red' : 'text-green'}`}>
              {item.dayChange}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
    <TouchableOpacity 
        className=" mt-4 mx-auto px-6 py-1 rounded-16 opacity-85 shadow-sm"
        onPress={() => {}}>
            <Text className="text-primary text-lg font-bold">View More</Text>
    </TouchableOpacity>
    </View>
    
  );
};

export default TokenList;
