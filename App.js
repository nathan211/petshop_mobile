/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';

const App: () => React$Node = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
