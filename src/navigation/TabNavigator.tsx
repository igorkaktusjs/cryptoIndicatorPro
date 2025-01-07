// TabNavigator.tsx

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import MarketScreen from '../screens/MarketScreen';
import NewsScreen from '../screens/NewsScreen';
import IndicatorsScreen from '../screens/IndicatorsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'HomeTab':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'MarketTab':
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
              break;
            case 'NewsTab':
              iconName = focused ? 'newspaper' : 'newspaper-outline';
              break;
            case 'IndicatorsTab':
              iconName = focused ? 'analytics' : 'analytics-outline';
              break;
            case 'ProfileTab':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'ellipse';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1E88E5',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="MarketTab" component={MarketScreen} options={{ headerShown: false }} />
      <Tab.Screen name="NewsTab" component={NewsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="IndicatorsTab" component={IndicatorsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="ProfileTab" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
