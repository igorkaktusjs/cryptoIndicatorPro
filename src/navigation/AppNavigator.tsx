import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import AboutUsScreen from '../screens/AboutUsScreen'; 
import NotificationsScreen from '../screens/NotificationsScreen'; 
import ProVersionScreen from '../screens/ProVersionScreen'; 
import WelcomeSecondScreen from '../components/welcomeComponents/WelcomeSecondScreen'
import Ionicons from '@expo/vector-icons/Ionicons';


const Stack = createStackNavigator();



const AppNavigator: React.FC = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
        <Stack.Screen name="NotificationsScreen" 
          component={NotificationsScreen} 
          options={
            ({ navigation }) => ({ 
              headerShown: true,
              title: 'Notifications',
              headerLeft: () => ( 
            <TouchableOpacity onPress={() => navigation.goBack()}> 
            <Ionicons name='arrow-back' size={32} color='gray'/> 
            </TouchableOpacity> ) })} />
        <Stack.Screen name="ProVersion" component={ProVersionScreen} />
        <Stack.Screen name="WelcomeSecondScreen" component={WelcomeSecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
