import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../config/colors';

export default function Setting({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Icon 
                    name='cog' 
                    size={20}
                    color={colors.white}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        marginHorizontal: 5
    }
})
