import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';
import OrderItem from '../components/OrderItem';


export default function OrderManager({ navigation }) {
    return (
        <View style={styles.container}>
            <Header 
                title='Tất cả đơn hàng' 
                onPress={() => navigation.goBack()}
            />
            <View style={styles.orderContainer}> 
                <OrderItem 
                    name='order 1'
                    price={123456}
                    cartCounter={3}
                    details={true}
                    onPress={() => navigation.navigate('OrderDetails') }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    orderContainer: {
        padding: 10,
    }
})
