import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import AccountNavigator from '../navigation/AccountNavigator';
import BookingNavigator from '../navigation/BookingNavigator';
import SearchNavigator from '../navigation/SearchNavigator';
import HomeNavigator from './HomeNavigator';
import CategoryNavigator from './CategoryNavigator';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={HomeNavigator}
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
                component={CategoryNavigator}
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
                component={SearchNavigator}
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
                component={BookingNavigator}
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
                component={AccountNavigator}
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
