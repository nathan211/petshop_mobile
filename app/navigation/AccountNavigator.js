import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../screens/AccountScreen';
import BookingManagerScreen from '../screens/BookingManagerScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';
import OrderManagerScreen from  '../screens/OrderManagerScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import BookedDetailsScreen from '../screens/BookedDetailsScreen';

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
                component={ProfileEditScreen} 
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
            <Stack.Screen 
                name="BookingManager" 
                component={BookingManagerScreen} 
                options={{
                    headerShown: false, 
                }}
            />
            <Stack.Screen 
                name="BookedDetails" 
                component={BookedDetailsScreen} 
                options={{
                    headerShown: false, 
                }}
            />
        </Stack.Navigator>
    )
}