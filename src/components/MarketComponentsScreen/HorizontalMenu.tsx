import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
    <View style={styles.container}>
      {items.map((item) => (
        <TouchableOpacity
          key={item}
          onPress={() => onSelectItem(item)}
          style={[
            styles.button,
            selectedItem === item && styles.selectedButton,
          ]}
        >
          <Text
            style={[
              styles.text,
              selectedItem === item && styles.selectedText,
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  button: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  selectedButton: {
    backgroundColor: '#007bff',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  selectedText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default React.memo(HorizontalMenu);