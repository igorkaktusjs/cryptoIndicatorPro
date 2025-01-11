import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
];

const BottomSheetLanguage: React.FC<{
  onClose: () => void;
  onSelectLanguage: (code: string) => void;
}> = ({ onClose, onSelectLanguage }) => {

  const handleSelectLanguage = (code: string) => {
    onSelectLanguage(code);
  };

  const renderItem = ({ item }: { item: typeof languages[0] }) => (
    <TouchableOpacity
      className="py-4 px-5"
      onPress={() => handleSelectLanguage(item.code)}
    >
      <Text className="text-lg text-center font-bold">{item.flag} {item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="p-5">
      <View className='flex-row items-center justify-center'>
        <TouchableOpacity
          className="mt-1 bg-blue-600 py-1 rounded absolute left-3"
          onPress={onClose}
        >
          <MaterialIcons name='close' size={32} color='gray'/>
        </TouchableOpacity>
        <View>
          <Text className="text-black text-center text-lg font-semibold">Select language</Text>
        </View>
      </View>
      <BottomSheetFlatList
        data={languages}
        keyExtractor={(item) => item.code}
        renderItem={renderItem}
        contentContainerStyle={{ flexGrow: 1 }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 20,
  },
});

export default BottomSheetLanguage;
