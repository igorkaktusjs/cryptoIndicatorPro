import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

interface Tag {
    id: string;
    label: string;
}

interface TagListPrors {
    tags: Tag[];
    className?: string;
    tagClassName?: string;
    onPress?: (tag: Tag) => void; 
}

const TagList:  React.FC<TagListPrors> = ({tags,className='',tagClassName='', onPress}) => {

    if(tags.length === 0) return null;

    return (
        <View className={`flex-row flex-wrap gap-1 ${className}`}>
            {tags.map((tag)=> {
                const TagComponent = onPress ? TouchableOpacity : View;

                return (
                    <TagComponent
            key={tag.id}
            className={`text-[10px] bg-gray-200 px-2 py-1 rounded-full text-gray-700 ${tagClassName}`}
            {...(onPress ? { onPress: () => onPress(tag) } : {})}
          >
            <Text className="text-[10px] text-gray-700">{tag.label}</Text>
          </TagComponent>
                );
            })}
        </View>
    )
}

export default TagList;