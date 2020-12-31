import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

import colors from '../../config/colors';
import Text from '../../components/Text';

export default function FilterItem({ isSelected, onPress, label, disable }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            { isSelected ?
            <Text customStyle={[styles.itemSelected, disable]}>{label}</Text> :
            <Text customStyle={[styles.item, disable]}>{label}</Text>}
        </TouchableWithoutFeedback> 
    )
}

const styles = StyleSheet.create({
    itemSelected: {
        backgroundColor: colors.secondary,
        color: colors.white,
        textAlign: 'center',
        padding: 5,
        borderRadius: 25,
        margin: 5
    },
    item: {
        backgroundColor: colors.lightPink,
        textAlign: 'center',
        padding: 5,
        borderRadius: 25,
        margin: 5
    },
})
