import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../config/colors';
import Text from '../components/Text';

export default function Header({title, onPress}) {
    return (
        <View style={styles.header}>
            <View style={styles.iconBackContainer}>
                <TouchableWithoutFeedback 
                    onPress={onPress}
                >
                    <Icon 
                        name='chevron-circle-left'
                        size={40}
                        color={colors.white}
                    />
                </TouchableWithoutFeedback>
            </View>
            <Text customStyle={{
            width: '100%',
            textAlign: 'center',
            paddingRight: 80,
            color: colors.white,
            }}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    iconBackContainer: {
        width: '10%'
    },
    header: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: colors.pink,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
})
