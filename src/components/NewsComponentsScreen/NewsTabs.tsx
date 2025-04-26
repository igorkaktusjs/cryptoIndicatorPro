import {  Text, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import clsx from 'clsx';

interface Props {
  filters: readonly string[];
  selected: string;
  onSelect: (filter:string) => void;
}

const NewsTabs = ({filters, selected, onSelect}: Props) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className='flex-row'>
      {filters.map((item) => (
        <TouchableOpacity 
          key={item}
          onPress={()=> onSelect(item)}
          className={clsx(
            'px-4 py-2 mr-2 rounded-full',
            selected === item ? 'bg-black' : 'bg-gray'
          )}
        >
          <Text className={clsx(
            'text-sm font-medium',
            selected === item ? 'text-write' : 'text-black'
          )}>
            {item}
          </Text>

        </TouchableOpacity>
      ) )}
    </ScrollView>
  )
}

export default NewsTabs