import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import colors from '../config/colors'
import Text from './Text';

export default function Category({ 
        customContainerStyle, 
        customTitleStyle, 
        customIconContainer, 
        icon,
        iconColor='#803C6D',
        title }) {
    return (
        <View style={[styles.container, customContainerStyle]}>            
            <View style={[styles.iconContainer, customIconContainer]}>
                <Icon
                    name={icon}
                    size={30}
                    color={iconColor}
                />
            </View>
            <Text customStyle={[styles.categoryTitle, customTitleStyle]}>{title}</Text>
        </View>       
    )
}

const styles = StyleSheet.create({    
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 7,
    },
    iconContainer: {
        width: 70,
        height: 70,
        backgroundColor: colors.white,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    categoryTitle: {
        fontSize: 16,
        marginTop: 5
    }
})
