import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home'
          }} />
        <Stack.Screen
          name="Home"
          component={AboutScreen}
          options={{
            title: 'About'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
