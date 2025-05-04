import {  Text, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import clsx from 'clsx';
import { capitalizeFirstLetter } from '../../models/capitalizeFirstLetter';

interface Props {
  filters: readonly string[];
  selected: string;
  onSelect: (filter:string) => void;
}

const NewsTabs = ({filters, selected, onSelect}: Props) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className='flex-row my-6 max-h-12 mx-4 h-24'>
      {filters.map((item) => (
        <TouchableOpacity 
          key={item}
          onPress={()=> onSelect(item)}
          className={clsx(
            'px-4 py-1 mr-2 rounded-xl',
            selected === item ? 'border-b-red border-b-hairline' : ''
          )}
        >
          <Text className={clsx(
            'text-md font-medium py-1',
            selected === item ? 'text-red' : 'text-black'
          )}>
            {capitalizeFirstLetter(item)}
          </Text>
        </TouchableOpacity>
      ) )}
    </ScrollView>
  )
}

export default NewsTabs