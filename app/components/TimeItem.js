import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

import colors from '../config/colors';
import Text from '../components/Text';

export default function TimeItem({ isSelected, onPress, label, disable }) {
    return (
        <TouchableWithoutFeedback 
            onPress={onPress}
            >
            { isSelected ?
            <Text customStyle={[styles.timeItemSelected, disable]}>{label}</Text> :
            <Text customStyle={[styles.timeItem, disable]}>{label}</Text>}
        </TouchableWithoutFeedback> 
    )
}

const styles = StyleSheet.create({
    timeItemSelected: {
        backgroundColor: colors.secondary,
        color: colors.white,
        width: 65,
        height: 35,
        textAlign: 'center',
        padding: 5,
        borderRadius: 25,
        margin: 5
    },
    timeItem: {
        backgroundColor: colors.lightPink,
        width: 65,
        height: 35,
        textAlign: 'center',
        padding: 5,
        borderRadius: 25,
        margin: 5
    },
})
