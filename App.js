import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import './global.css'; 
import Animated from 'react-native-reanimated'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        < AppNavigator />
      </Provider>
    </GestureHandlerRootView>
    
    
  );
}

