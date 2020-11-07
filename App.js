/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  StyleSheet
} from 'react-native';


import HomeScreen from './app/screens/HomeScreen';
import SplashScreen from 'react-native-splash-screen';

const App: () => React$Node = () => {

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <HomeScreen /> 
  );
};

const styles = StyleSheet.create({

});

export default App;
