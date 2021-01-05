import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback} from 'react-native';

import colors from '../../config/colors';
import Text from '../Text';

export default function TabItem({ onPress, title, isActive }) {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPress}>
                {
                    isActive ?  
                    <View style={styles.active}>
                        <Text customStyle={styles.title}>{title}</Text>
                    </View> : 
                    <View style={styles.notActive}>
                        <Text customStyle={styles.title}>{title}</Text>
                    </View>
                }
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    active: {
        borderBottomWidth: 1,
        borderBottomColor: colors.brown,
        padding: 5,
    },
    container: {
        marginHorizontal: 5
    },
    notActive: {
        padding: 5
    },
    title: {
        fontWeight: 'bold'
    }
})
