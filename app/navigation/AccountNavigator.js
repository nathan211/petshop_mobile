import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../screens/AccountScreen';
import ProfileEdit from '../screens/ProfileEdit';

const Stack = createStackNavigator();

export default function AccountNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Account" 
                component={AccountScreen} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="ProfileEdit" 
                component={ProfileEdit} 
                options={{
                    headerShown: false, 
                }}
            />
        </Stack.Navigator>
    )
}