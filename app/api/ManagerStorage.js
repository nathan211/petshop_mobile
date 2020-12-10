import AsyncStorage from '@react-native-async-storage/async-storage';

import AsyncStorageContstants from '../contstants/AsyncStorageContstants';

export const storeUserToken = async (token) => {
    try {
        await AsyncStorage.setItem(AsyncStorageContstants.AUTH_USER_TOKEN, token);
    } catch (e) {
      // saving error
      console.log('Error storing user token => e', e);
    }
}

export const getUserToken = async () => {
    try {
      return await AsyncStorage.getItem(AsyncStorageContstants.AUTH_USER_TOKEN);
    } catch(e) {
      // error reading value
      console.log('Error reading user token => e', e);
    }
}