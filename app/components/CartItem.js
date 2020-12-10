import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Image } from 'react-native';

import Button from '../components/Button';
import colors from '../config/colors';
import Text from '../components/Text';

export default function CartItem({ 
    name, 
    cartCounter, 
    price,
    onDecrease,
    onIncrease,
    onDelete}) {
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
                        <Button 
                            title='-'
                            customContainerStyle={styles.customContainerButton}
                            onPress={onDecrease}
                        />
                        <Text customStyle={styles.counter}>{ cartCounter }</Text>
                        <Button 
                            title='+' 
                            customContainerStyle={styles.customContainerButton}
                            onPress={onIncrease}
                        />
                    </View>
                </View>
                <TouchableWithoutFeedback style={styles.deleteContainer}>
                    <Text customStyle={styles.delete}>Xóa</Text>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    customContainerButton: {
        width: 60,
        padding: 0,
        flexDirection: 'row',
    },
    counter: {
        marginHorizontal: 10
    },
    container: {
        backgroundColor: colors.white,
        marginTop: 5,
        width: '100%',
        height: 120,
        flexDirection: 'row',
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    delete: {
        color: colors.red,
        fontSize: 15,
        margin: 10,
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
