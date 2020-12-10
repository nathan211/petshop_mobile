import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import colors from '../config/colors';
import Chatting from '../components/Chatting';
import ShoppingCart from '../components/ShoppingCart';
import Text from '../components/Text';

export default function BookingScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.spaAndGrooming}>Spa & Grooming</Text>
                <View style={styles.iconContainer}>
                    <ShoppingCart onPress={() => navigation.navigate('ShoppingCart')} />
                    <Chatting onPress={() => console.log('go to chatting')} />
                </View>
            </View>
            <View style={styles.bookingContainer}>
                <View style={styles.booking}>
                    <Image 
                        style={styles.image} 
                        source={require('../assets/images/grooming1.jpg')} 
                    />
                    <View style={styles.titleContainer}>
                        <Text style={styles.name}>Combo trọn gói tắm & tạo kiểu</Text>
                        <Text style={styles.price}>234567</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bookingContainer: {
        paddingVertical: 10,
        paddingHorizontal: 25,
    },
    booking: {
        backgroundColor: colors.white,
        width: '100%',
        height: 250,
        borderRadius: 10,
        overflow: 'hidden',
    },
    header: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: colors.pink,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconContainer: {
        flexDirection: 'row',
        width: '20%',
        marginRight: 5,
    },
    spaAndGrooming: {
        color: colors.white,
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    image: {
        width: '100%',
        height: 190
    },
    name: {
        fontSize: 20
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.red
    },
    titleContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10
    },
})
