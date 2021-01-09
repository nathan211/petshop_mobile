/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import SplashScreen from 'react-native-splash-screen';

import rootReducer from './app/redux/reducers';
import Root from './app/root';

const store = configureStore({
  reducer: rootReducer
});

const App: () => React$Node = () => {
//hehe Anh Tu was there
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>  
      <Root />
    </Provider>
  );
};

export default App;
