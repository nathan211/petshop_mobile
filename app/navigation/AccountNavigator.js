import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../screens/AccountScreen';
import ProfileEdit from '../screens/ProfileEdit';
import OrderManagerScreen from  '../screens/OrderManagerScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';

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
            <Stack.Screen 
                name="OrderManager" 
                component={OrderManagerScreen} 
                options={{
                    headerShown: false, 
                }}
            />
            <Stack.Screen 
                name="OrderDetails" 
                component={OrderDetailsScreen} 
                options={{
                    headerShown: false, 
                }}
            />
        </Stack.Navigator>
    )
}