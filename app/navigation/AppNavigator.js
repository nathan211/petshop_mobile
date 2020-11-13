import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import AccountScreen from '../screens/AccountScreen'
import BookingScreen from '../screens/BookingScreen'
import CategoryScreen from '../screens/CategoryScreen'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon 
                            name='home' 
                            size={size}
                            color={color}
                        />
                    ),
                    title: 'Trang chủ'
                }}
            />
            <Tab.Screen
                name='Category'
                component={CategoryScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon 
                            name='list' 
                            size={size}
                            color={color}
                        />
                    ),
                    title: 'Danh mục'
                }}
            />
            <Tab.Screen
                name='Search'
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon 
                            name='search' 
                            size={size}
                            color={color}
                        />
                    ),
                    title: 'Tìm kiếm'
                }}
            />
            <Tab.Screen
                name='Booking'
                component={BookingScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon 
                            name='bath' 
                            size={size}
                            color={color}
                        />
                    ),
                    title: 'Đặt chỗ'
                }}
            />
            <Tab.Screen
                name='Account'
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon 
                            name='user' 
                            size={size}
                            color={color}
                        />
                    ),
                    title: 'Tài khoản'
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})
