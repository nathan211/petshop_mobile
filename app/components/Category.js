import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import colors from '../config/colors'
import Text from './Text';

export default function Category() {
    return (
        <View style={styles.container}>            
            <View style={styles.backgroundIcon}>
                <Icon
                    name='paw'
                    size={40}
                    color={colors.purple}
                />
            </View>
            <Text customStyle={styles.categoryTitle}>Thức ăn</Text>
        </View>       
    )
}

const styles = StyleSheet.create({    
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 7,
    },
    backgroundIcon: {
        width: 70,
        height: 70,
        backgroundColor: colors.white,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 1.00,
        elevation: 5,
    },
    categoryTitle: {
        fontSize: 16,
        marginTop: 5
    }
})
