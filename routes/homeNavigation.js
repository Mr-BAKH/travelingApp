import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Home from '../screens/home'
import Welcome from '../screens/welcome';
import DestainationScreen from '../screens/destanationscreen';
import About from '../screens/about'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName='About'
      screenOptions={{headerShown:false}}
    >
      <Stack.Screen
        name="Home" 
        component={Home} 
       />
      <Stack.Screen
        name="Welcome" 
        component={Welcome} 
       />
      <Stack.Screen
        name="DestainationScreen" 
        component={DestainationScreen} 
       />
      <Stack.Screen
        name="About" 
        component={About} 
       />
    </Stack.Navigator>
  );
}

export default MyStack;