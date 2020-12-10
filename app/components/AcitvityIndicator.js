import React from 'react'
import { StyleSheet, View } from 'react-native'

import colors from '../config/colors'
import Text from '../components/Text'

export default function AcitvityIndicator() {
    return (
        <View style={styles.container}>
            <Text customStyle={styles.loading}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    loading: {
        backgroundColor: colors.pink,
        color: colors.white,
        fontSize: 20,
        width: 100,
        height: 30,
        borderRadius: 15,
        textAlign: 'center',
    }
})
