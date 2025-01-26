import React, {useMemo} from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons,FontAwesome5, MaterialCommunityIcons }from '@expo/vector-icons/';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useRoute,  useNavigation } from '@react-navigation/native';
import {  useGetTop100ByMarketCapQuery } from '../../redux/slices/binanceApiSlice';


const MainHeaderWithLogoAndIcons: React.FC = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { id } = route.params;

    const { data: coinData } = useGetTop100ByMarketCapQuery();
    const coin = useMemo(() => coinData?.find((c) => c.symbol.toLowerCase() === id.toLowerCase()), [coinData, id]);

  return (
    <SafeAreaView edges={['top']}  className=" px-5 my-2">
    <View className='flex-row justify-between items-center'>
    <View className=" flex-row justify-start items-center py-4 gap-2">
        <TouchableOpacity className='mr-3' onPress={() => navigation.goBack()}>
        <   FontAwesome5 name="arrow-left" size={24} color="gray" />
        </TouchableOpacity>
            <Image source={{ uri: coin.imageUrl }} className="h-12 w-12" />
            <View>
            <Text className="text-lg font-bold">{coin.symbol.toUpperCase()}</Text>
            <Text className="text-sm font-sm">{coin.name}</Text>
            </View>
        <View/>
    </View>
    <View className='flex-row  gap-5'>
    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
      <MaterialCommunityIcons name="share" size={24} color="gray" /> 
        </TouchableOpacity> 
        <TouchableOpacity>
        <FontAwesome5 name="star" size={24} color="gray" />
        </TouchableOpacity>
        
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <MaterialIcons name="search" size={32} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <MaterialIcons name="notifications-none" size={32} color="gray" />
      </TouchableOpacity>
      </View>
      </View>
      <View/>
    </SafeAreaView>
  );
};

export default MainHeaderWithLogoAndIcons;
