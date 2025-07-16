// navigation/StackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home';
import AboutUs from '../components/AboutUs';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={AboutUs} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
