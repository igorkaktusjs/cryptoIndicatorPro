// src/App.tsx
// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import './global.css'; 
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      
      <AppNavigator />
    </Provider>
  );
}

