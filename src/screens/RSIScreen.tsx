// src/screens/RSIScreen.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { fetchRSI } from '../redux/cryptoSlice';
import { RootState } from '../redux/store';

const RSIScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { rsi, status, error } = useSelector((state: RootState) => state.crypto);

  useEffect(() => {
    dispatch(fetchRSI());
  }, [dispatch]);

  return (
    <View className="flex-1 justify-center items-center p-4 bg-gray-100">
      {status === 'loading' && <Text className="text-lg text-blue-500">Loading...</Text>}
      {error && <Text className="text-lg text-red-500">Error: {error}</Text>}
      {rsi && <Text className="text-xl font-bold text-red-800 text-left justify-start">RSI: {rsi}</Text>}
      <Button title="Refreshssss" onPress={() => dispatch(fetchRSI())} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" />
    </View>
  );
};

export default RSIScreen;
