import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Image } from 'react-native';

import Button from '../components/Button';
import colors from '../config/colors';
import Text from '../components/Text';
import numberFormatter from '../utilities/numberFormatter';
import UrlContstants from '../contstants/UrlContstant';

export default function CartItem({ 
    name, 
    cartCounter, 
    price,
    onDecrease,
    onIncrease,
    onRightAction,
    imageUrl,}) {

    return (
        <TouchableWithoutFeedback onPress={() => console.log('go to details')}>
            <View style={styles.container}>
                <Image 
                    style={styles.image}
                    source={{ uri: UrlContstants.HOSTING + imageUrl }} 
                />
                <View style={styles.nameContainer}>
                    <Text 
                        customStyle={styles.name}
                        numberOfLines={2}
                    >
                        { name }
                    </Text>
                    <Text customStyle={styles.price}>{ numberFormatter(price) + ' ₫' }</Text>
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
                <TouchableWithoutFeedback 
                    onPress={onRightAction}
                    style={styles.deleteContainer}>
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
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.red,
    },
    name: {
        fontSize: 16
    }
})
