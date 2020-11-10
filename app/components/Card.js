import React from 'react'
import { StyleSheet, View } from 'react-native'

import colors from '../config/colors'
import Text from './Text'

export default function Card() {
    return (
        <View style={styles.container}>
            <Text>Card</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 140,
        height: 180,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 1.00,
        elevation: 5,
        margin: 10
    }
})
