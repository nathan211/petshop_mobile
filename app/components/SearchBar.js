import React from 'react'
import { StyleSheet, View } from 'react-native'

import colors from '../config/colors'
import TextInput from './TextInput'

export default function SearchBar({customStyle}) {
    return (
        <View style={[styles.container, customStyle]}>
            <TextInput 
                icon='search'
                iconColor={colors.medium} 
                placeholder='Tìm kiếm'
                placeholderTextColor={colors.medium}
                customContainerStyle={styles.customContainerStyle}
                customInputStyle={styles.customInputStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
    },
    customContainerStyle: {
        padding: 0,
        marginVertical: 0,
        backgroundColor: colors.white,
        borderRadius: 10,
    },
    customInputStyle: {
        padding: 3,
        color: colors.medium
    }
})
