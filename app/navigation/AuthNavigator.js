import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import colors from '../config/colors';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            <Stack.Screen 
                name="Login" 
                component={LoginScreen} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Register" 
                component={RegisterScreen} 
                options={{
                    title: 'Đăng ký',
                    headerStyle: {
                      backgroundColor: colors.pink,
                      elevation: 0
                    },
                    headerTintColor: colors.white,
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center',
                }}
            />
      </Stack.Navigator>
    )
}

