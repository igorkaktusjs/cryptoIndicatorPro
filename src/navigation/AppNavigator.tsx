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
import CoinDetailsScreen from '../screens/CoinDetailsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStack = () => (
  <Stack.Navigator >
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}} />
    <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ title: 'Notifications' }} />
    <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} />
    <Stack.Screen name="AboutUs" component={AboutUsScreen} options={{ title: 'About Us' }} />
    <Stack.Screen name="ProVersion" component={ProVersionScreen} options={{ title: 'Pro Version' }} />
    <Stack.Screen name="Welcome" component={WelcomeSecondScreen} options={{ title: 'Welcome' }} />
    <Stack.Screen name="CoinDetails" component={CoinDetailsScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);


const MarketStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Market" component={MarketScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);


const NewsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="News" component={NewsScreen} options={{ headerShown: false, }}/>
  </Stack.Navigator>
);


const IndicatorsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Indicators" component={IndicatorsScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);


const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
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
          tabBarActiveTintColor: '#d35a35',
          tabBarInactiveTintColor: '#8e8d8a',
          tabBarStyle: {
            backgroundColor: '#eae7dc',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute',
            height: 70,
            marginBottom: 0,
            paddingBottom: 14,
            paddingTop: 10,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: -2 },
            shadowRadius: 10,
            elevation: 10
          }
        })}
      >
        <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Home', headerShown: false }} />
        <Tab.Screen name="MarketTab" component={MarketStack} options={{ title: 'Market', headerShown: false }} />
        <Tab.Screen name="NewsTab" component={NewsStack} options={{ title: 'News', headerShown: false }} />
        <Tab.Screen name="IndicatorsTab" component={IndicatorsStack} options={{ title: 'Indicators', headerShown: false }} />
        <Tab.Screen name="ProfileTab" component={ProfileStack} options={{ title: 'Profile', headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
