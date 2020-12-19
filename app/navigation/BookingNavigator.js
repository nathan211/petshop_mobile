import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import BookingScreen from '../screens/BookingScreen';
import BookingDetails from '../screens/BookingDetails';

const Stack = createStackNavigator();

export default function BookingNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Booking" 
                component={BookingScreen} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="BookingDetails" 
                component={BookingDetails} 
                options={{
                    headerShown: false, 
                }}
            />
        </Stack.Navigator>
    )
}