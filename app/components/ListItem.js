import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../config/colors';
import Text from '../components/Text';

export default function ListItem({ 
        title, 
        leftIcon, 
        rightIcon, 
        leftIconColor, 
        rightIconColor,
        customContainer,
        onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, customContainer]}>
                <View style={styles.leftContainer}>
                    <Icon 
                        name={leftIcon}
                        size={25}
                        color={leftIconColor}
                        style={styles.leftIcon}
                    />
                    <Text customStyle={styles.title}>{title}</Text>
                </View>
                <Icon 
                    name={rightIcon}
                    size={15}
                    color={rightIconColor}
                    style={styles.rightIcon}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5
    },
    leftIcon: {
        marginRight: 10
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    rightIcon: {
       
    }
});
