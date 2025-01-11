import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface SectionProps {
  title: string;
  icon?: string;
  iconColor?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon, iconColor, children }) => {
  return (
    <>
      <Text className="text-2xl font-extrabold text-gray-700 mb-4 mt-2">{title}</Text>
      <View className="mb-8 p-4 bg-white rounded-lg shadow">
        {children}
      </View>
    </>
  );
};

export default Section;
