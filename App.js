import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import HomeNavigation from './routes/homeNavigation'
import { NavigationContainer } from '@react-navigation/native';

const App =()=>{
    return(
      <NavigationContainer>
        <StatusBar style='auto'/>
        <HomeNavigation/>
      </NavigationContainer>
)
}

export default App;