/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StatusBar } from 'react-native-safe-area-context';

import Buying from './src/pages/buying';
import Home from './src/pages/home';
import More from './src/pages/more';
import SignIn from './src/pages/signin';

const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='More' component={More} options={{ headerShown: false }} />
        <Stack.Screen name='Buying' component={Buying} options={{ headerShown: false }} />
        <Stack.Screen name='Sign' component={SignIn} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
