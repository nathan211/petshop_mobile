import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../config/colors';
import defaultStyles from '../config/styles';

export default function AppTextInput({ 
    icon, 
    iconColor = '#f8f4f4', 
    placeholderTextColor = '#f8f4f4', 
    width = '100%', 
    customContainerStyle, 
    customInputStyle,
    ...otherProps}) {

    return (
        <View style={[styles.container, {width}, customContainerStyle]}>
            <Icon 
                style={styles.icon}
                name={icon}
                size={20}
                color={iconColor}
            />
            <TextInput
                placeholderTextColor={placeholderTextColor}
                style={[defaultStyles.text, {flex: 1}, customInputStyle]} // set flex to 1 to fix overflow text
                {...otherProps}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF30',
        borderRadius: 50,
        flexDirection: 'row',
        padding: 5,
        marginVertical: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.white,
    },
    icon: {
        marginHorizontal: 10,
    }
})
