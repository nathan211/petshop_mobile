import React from 'react';
import { 
    StyleSheet, 
    View, 
    Image, 
    TouchableWithoutFeedback } from 'react-native';

import colors from '../config/colors';
import Text from './Text';
import UrlContstants from '../contstants/UrlContstant';

export default function Card({ 
        title, 
        subTitle, 
        customContainerStyle,
        customTitleStyle,
        customTitleContainerStyle,
        onPress,
        imageUrl }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, customContainerStyle]}>
                    <Image style={styles.image} source={{ uri: UrlContstants.HOSTING + imageUrl }} />
                    <View style={[styles.titleContainer, customTitleContainerStyle]}>
                        <Text numberOfLines={2} customStyle={[styles.title, customTitleStyle]}>{title}</Text>
                        <Text numberOfLines={1} customStyle={styles.subTitle}>{subTitle}</Text>
                    </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 220,
        backgroundColor: colors.white,
        borderRadius: 5,
        elevation: 5,
        marginVertical: 10,
        marginHorizontal: 5,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '70%',
    },
    titleContainer: {
        padding: 5,
        width: '100%',
    },
    title: {
        fontSize: 13,
        width: '100%',
    },
    subTitle: {
        color: colors.red,
        fontWeight: 'bold',
        width: '100%',
    }
})
