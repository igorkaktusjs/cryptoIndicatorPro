import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

interface Tag {
  id: string;
  label: string;
  logo?: string;
  priceChange24h?: number;
}

interface CoinsTagListProps {
  tags: Tag[];
  className?: string;
  tagClassName?: string;
  onPress: (tag: Tag) => void;
}

const CoinsTagList = ({ tags, className, tagClassName, onPress }: CoinsTagListProps) => {
  if (tags.length === 0) return null;

  return (
    <View className={`flex-row flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <TouchableOpacity
          key={tag.id}
          className={`flex-row items-center justify-center bg-backgroundLight rounded-md px-2 py-1 ${tagClassName}`}
          onPress={() => onPress(tag)}
        >
          {tag.logo && (
            <Image
              source={{ uri: tag.logo }}
              className="w-8 h-8 rounded-full mr-1"
            />
          )}
          <Text className="text-md text-primary font-semibold">{tag.label}</Text>
          {tag.priceChange24h !== undefined && (
            <Text
              className={`text-md ml-1 ${
                tag.priceChange24h >= 0 ? "text-green" : "text-red"
              }`}
            >
              {tag.priceChange24h.toFixed(1)}%
            </Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CoinsTagList;
