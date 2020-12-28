import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../config/colors';
import Text from '../components/Text';

export default function CartItem({ 
    name, 
    cartCounter,
    customNameStyle,
    price, 
    details, 
    onRightAction,
    onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image 
                    style={styles.image}
                    source={require('../assets/images/product.jpg')} 
                    resizeMode='contain'
                />
                <View style={styles.infoContainer}>
                    <Text style={[styles.name, customNameStyle]}>{ name }</Text>
                    <Text customStyle={styles.customPrice}>{ price }</Text>
                    <View style={styles.counterContainer}>
                        <Text customStyle={styles.counter}>{ cartCounter }</Text>
                    </View>
                </View>
                {
                    details ?
                    <TouchableWithoutFeedback onPress={onRightAction}>
                        <Text customStyle={styles.viewDetails}>
                            <Icon 
                                name='chevron-right'
                                size={15}
                            />
                        </Text>
                    </TouchableWithoutFeedback> : null
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    counter: {
    },
    container: {
        backgroundColor: colors.white,
        marginTop: 5,
        width: '100%',
        height: 100,
        flexDirection: 'row',
    },
    customPrice: {
        color: colors.red,
        fontWeight: 'bold',
    },
    counterContainer: {
    },
    viewDetails: {
        paddingTop: 42,
        paddingRight: 5,
        color: colors.medium
    },
    image: {
        width: '30%',
        height: 100,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    name: {

    }
})
