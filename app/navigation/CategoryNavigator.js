import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import CategoryScreen from '../screens/CategoryScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import OrderScreen from '../screens/OrderScreen';
import ProductScreen from '../screens/ProductsScreen';

const Stack = createStackNavigator();

export default function CategoryNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Category" 
                component={CategoryScreen} 
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
            <Stack.Screen 
                name="Order" 
                component={OrderScreen} 
                options={{
                    headerShown: false, 
                }}
            />
        </Stack.Navigator>
    )
}