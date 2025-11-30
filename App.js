import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartupScreen from './Screens/StartupScreen';
import HomePage from './Screens/Homepage';
import InfoPage from './Screens/InfoPage';
import ActivityScreen from './Screens/ActivityScreen';
const Stack = createStackNavigator();
export default function App() {
 return (
 <NavigationContainer>
 <Stack.Navigator screenOptions={{ headerShown: false }}>
 <Stack.Screen name="Startup" component={StartupScreen} />
 <Stack.Screen name="Home" component={HomePage} />
 <Stack.Screen name="Info" component={InfoPage} />
 <Stack.Screen name="Activity" component={ActivityScreen} />
 </Stack.Navigator>
 </NavigationContainer>
 );
}