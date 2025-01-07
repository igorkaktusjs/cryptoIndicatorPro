// TabNavigator.tsx

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import MarketScreen from '../screens/MarketScreen';
import NewsScreen from '../screens/NewsScreen';
import IndicatorsScreen from '../screens/IndicatorsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import DetailsScreen from '../screens/DetailsScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import ProVersionScreen from '../screens/ProVersionScreen';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Market':
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
              break;
            case 'News':
              iconName = focused ? 'newspaper' : 'newspaper-outline';
              break;
            case 'Indicators':
              iconName = focused ? 'analytics' : 'analytics-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            case 'Notifications':
              iconName = focused ? 'notifications' : 'notifications-outline';
              break;
            case 'Details':
              iconName = focused ? 'list' : 'list-outline';
              break;
            case 'AboutUs':
              iconName = focused ? 'information-circle' : 'information-circle-outline';
              break;
            case 'ProVersion':
              iconName = focused ? 'star' : 'star-outline';
              break;
            case 'Welcome':
              iconName = focused ? 'hand' : 'hand-outline';
              break;
            case 'LanguageSelection':
              iconName = focused ? 'language' : 'language-outline';
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
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Market" component={MarketScreen} options={{ headerShown: false }} />
      <Tab.Screen name="News" component={NewsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Indicators" component={IndicatorsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: true }} />
      <Tab.Screen name="Details" component={DetailsScreen} options={{ headerShown: true }} />
      <Tab.Screen name="AboutUs" component={AboutUsScreen} options={{ headerShown: true }} />
      <Tab.Screen name="ProVersion" component={ProVersionScreen} options={{ headerShown: true }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
