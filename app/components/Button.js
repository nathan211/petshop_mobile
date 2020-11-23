import React from 'react'
import { StyleSheet, Text, TouchableHighlight, TouchableHighlightBase, TouchableOpacity } from 'react-native';

import colors from '../config/colors'

export default function Button({ title, onPress, color = 'light', customStyleTitle }) {
    return (
        <TouchableOpacity
            style={[styles.button, {backgroundColor: colors[color]}]}
            onPress={onPress}
        >
            <Text style={[styles.title, customStyleTitle]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 75,
        padding: 10,
        marginVertical: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: colors.brown,
        fontWeight: "bold",
        textTransform: 'uppercase',
        fontSize: 18,
    }
})
