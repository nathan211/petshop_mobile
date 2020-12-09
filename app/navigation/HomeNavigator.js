import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';

const Stack = createStackNavigator();

export default function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="ProductDetails" 
                component={ProductDetailsScreen} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="ShoppingCart" 
                component={ShoppingCartScreen} 
                options={{
                    headerShown: false, 
                }}
            />
        </Stack.Navigator>
    )
}