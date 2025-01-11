import React from 'react';
import { Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface ProfileButtonProps {
  text: string;
  iconName: string;
  iconColor: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ text, iconName, iconColor, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 8 }, buttonStyle]} onPress={onPress}>
      <Text style={[{ fontSize: 18, color: '#4A4A4A' }, textStyle]}>{text}</Text>
      <MaterialIcons name={iconName} size={28} color={iconColor} />
    </TouchableOpacity>
  );
};

export default ProfileButton;
