import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    withRepeat,
  } from 'react-native-reanimated';
  import { View, Button, StyleSheet } from 'react-native';
  import React from 'react';
  
  export default function Text() {
    const offset = useSharedValue<number>(0);
  
    const style = useAnimatedStyle(() => ({
      transform: [{ translateX: offset.value }],
    }));
  
    const OFFSET = 40;
  
    const handlePress = () => {
      offset.value = withRepeat(withTiming(OFFSET), 10,true );
    };
  
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, style]} />
        <Button title="shake" onPress={handlePress} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      
      flexDirection: 'column',
      alignItems: 'center',
    },
    box: {
      width: 100,
      height: 100,
      margin: 50,
      borderRadius: 15,
      backgroundColor: '#b58df1',
    },
  });