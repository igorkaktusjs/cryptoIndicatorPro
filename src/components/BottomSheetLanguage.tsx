// BottomSheetLanguage.tsx

import React, { useRef, useMemo } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
];

const BottomSheetLanguage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['80%'], []);

  const handleSelectLanguage = (code: string) => {
    console.log(`Selected language: ${code}`);
    onClose();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ paddingVertical: 15, paddingHorizontal: 20 }}
      onPress={() => handleSelectLanguage(item.code)}
    >
      <Text style={{ fontSize: 18 }}>{item.flag} {item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <BottomSheet
      ref={sheetRef}
      index={0}
      snapPoints={snapPoints}
      onChange={(index) => index === -1 && onClose()}
    >
      <View style={{ padding: 20 }}>
        <FlatList
          data={languages}
          keyExtractor={(item) => item.code}
          renderItem={renderItem}
        />
        <TouchableOpacity
          style={{ marginTop: 20, backgroundColor: '#1E88E5', padding: 15, borderRadius: 10 }}
          onPress={onClose}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Применить</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};

export default BottomSheetLanguage;
