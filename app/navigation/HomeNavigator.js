import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeNavigator() {
    return (
        <Stack.Navigator>
             <Stack.Screen 
                name="ProductDetails" 
                component={ProductDetails} 
                options={{
                    headerShown: false,
                }}
            />
             <Stack.Screen 
                name="ProductsByCategory" 
                component={ProductsByCategory} 
                options={{
                    headerShown: false, 
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
