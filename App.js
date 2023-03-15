/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StatusBar } from 'react-native-safe-area-context';
import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Buying from './src/pages/buying';
import Home from './src/pages/home';
import More from './src/pages/more';
import SignIn from './src/pages/signin';

const App = () => {

  const Stack = createStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  const [balance, setBalance] = useState(10);
  const [isCheck, setIsCheck] = useState(false);
  const [isReview, setIsReview] = useState(false);
  const [isShare, setIsShare] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' options={{ headerShown: false }}>
          {props => <Home balance={balance} setBalance={setBalance} />}
        </Stack.Screen>
        <Stack.Screen name='More' options={{ headerShown: false }}>
          {props => <More
            balance={balance}
            setBalance={setBalance}
            isCheck={isCheck}
            setIsCheck={setIsCheck}
            isReview={isReview}
            setIsReview={setIsReview}
            isShare={isShare}
            setIsShare={setIsShare}
          />}
        </Stack.Screen>
        <Stack.Screen name='Buying' options={{ headerShown: false }}>
          {props => <Buying balance={balance} setBalance={setBalance} />}
        </Stack.Screen>
        <Stack.Screen name='Sign' options={{ headerShown: false }}>
          {props => <SignIn balance={balance} setBalance={setBalance} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
