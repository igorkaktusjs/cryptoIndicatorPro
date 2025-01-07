// AppNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
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
import WelcomeSecondScreen from '../components/welcomeComponents/WelcomeSecondScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} options={{ headerShown: true, title: 'Notifications' }} />
    <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ headerShown: true, title: 'Details' }} />
    <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} options={{ headerShown: true, title: 'About Us' }} />
    <Stack.Screen name="ProVersionScreen" component={ProVersionScreen} options={{ headerShown: true, title: 'Pro Version' }} />
    <Stack.Screen name="WelcomeSecondScreen" component={WelcomeSecondScreen} options={{ headerShown: true, title: 'Welcome' }} />
  </Stack.Navigator>
);

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
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
              default:
                iconName = 'ellipse';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1E88E5',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Market" component={MarketScreen} options={{ headerShown: false }} />
        <Tab.Screen name="News" component={NewsScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Indicators" component={IndicatorsScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
