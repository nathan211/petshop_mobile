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
import navigationTheme from './app/navigation/navigationTheme';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';

const App: () => React$Node = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // <NavigationContainer theme={navigationTheme}>
    //   <AppNavigator />
    // </NavigationContainer>
    <RegisterScreen />
  );
};

export default App;
