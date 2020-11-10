import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Text from './Text';

import colors from '../config/colors'

export default function CumulativePoints({cutomContainerStyle}) {
    return (
        <View style={[styles.container, cutomContainerStyle]}>
            <View style={styles.pet}>
                <Image 
                    source={require('../assets/images/profile.jpg')}
                    style={styles.image}
                />
                <Text customStyle={styles.name}>Tus</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.pointContainer}>
                <View style={styles.background}>
                    <Icon 
                        name='user'
                        size={20}
                        color='red'
                    />
                </View>
                <Text>123456</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        padding: 10,
        paddingRight: 20,
        backgroundColor: colors.white,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 1.00,
        elevation: 5,
        marginTop: -25,
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    pet: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1/2
    },
    name: {
        marginLeft: 10,
    },
    pointContainer: {
        flex: 1/2,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    },
    point: {
        color: colors.red,
        fontWeight: 'bold',
    },
    background: {
        width: 50,
        height: 50,
        backgroundColor: colors.light,
        borderRadius: 25,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    separator: {
        width: 1,
        height: '100%',
        backgroundColor: colors.medium,
        alignSelf: 'center'
    }
})