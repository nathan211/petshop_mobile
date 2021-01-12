import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import ProductScreen from '../screens/ProductsScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

export default function BookingNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Search" 
                component={SearchScreen} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Products" 
                component={ProductScreen} 
                options={{
                    headerShown: false, 
                }}
            />
        </Stack.Navigator>
    )
}