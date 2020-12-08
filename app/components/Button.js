import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../config/colors'

export default function Button({ 
    title, 
    onPress, 
    color = 'light', 
    customTitleStyle, 
    customContainerStyle,
    icon,
    iconColor }) {

    return (
        <TouchableOpacity
            style={[styles.button, {backgroundColor: colors[color]}, customContainerStyle]}
            onPress={onPress}
        >
            <Icon 
                style={styles.icon}
                name={icon}
                size={25}
                color={iconColor}
            />
            <Text style={[styles.title, customTitleStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 75,
        padding: 5,
        marginVertical: 7,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        color: colors.brown,
        fontWeight: "bold",
        textTransform: 'uppercase',
        fontSize: 18,
    },
    icon: {
        marginRight: 10
    },
})
