import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface HorizontalMenuProps {
  items: string[];
  selectedItem: string;
  onSelectItem: (item: string) => void;
}

const HorizontalMenu: React.FC<HorizontalMenuProps> = ({
  items,
  selectedItem,
  onSelectItem,
}) => {
  return (
    <View className="flex-row justify-between">
      {items.map((item) => (
        <TouchableOpacity
          key={item}
          onPress={() => onSelectItem(item)}
          className={`px-5 py-2 mx-5 rounded-md ${
            selectedItem === item ? 'bg-neutral-200' : 'bg-gray-100'
          }`}
        >
          <Text
            className={`text-24 ${
              selectedItem === item ? 'text-black font-bold' : 'text-gray text-24 font-bold'
            }`}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default React.memo(HorizontalMenu);
