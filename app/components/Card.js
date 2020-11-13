import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import colors from '../config/colors'
import Text from './Text'

export default function Card({ image, title, subTitle }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/images/product.jpg')} />
            <View style={styles.titleContainer}>
                <Text numberOfLines={1} customStyle={styles.title}>{title}</Text>
                <Text numberOfLines={1} customStyle={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 140,
        height: 200,
        backgroundColor: colors.white,
        borderRadius: 5,
        elevation: 5,
        marginVertical: 10,
        marginHorizontal: 5,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '75%',
    },
    titleContainer: {
        paddingHorizontal: 5,
        width: '100%',
    },
    title: {
        fontSize: 16,
        width: '100%',
    },
    subTitle: {
        color: colors.red,
        fontWeight: 'bold',
        width: '100%',
    }
})
