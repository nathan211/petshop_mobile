import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Image } from 'react-native';

import Button from '../components/Button';
import colors from '../config/colors';
import Text from '../components/Text';

export default function CartItem({ name, cartCounter, price,}) {
    return (
        <TouchableWithoutFeedback onPress={() => console.log('go to details')}>
            <View style={styles.container}>
                <Image 
                    style={styles.image}
                    source={require('../assets/images/product.jpg')} 
                />
                <View style={styles.nameContainer}>
                    <Text>{ name }</Text>
                    <Text>{ price }</Text>
                    <View style={styles.counterContainer}>
                        <Text customStyle={styles.counter}>{ 'SL: ' + cartCounter }</Text>
                    </View>
                </View>
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
        height: 120,
        flexDirection: 'row',
    },
    counterContainer: {
    },
    image: {
        width: '30%',
        height: 120,
    },
    nameContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 10
    }
})
