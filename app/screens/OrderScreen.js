import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import Button from '../components/Button';
import colors from '../config/colors';
import Header from '../components/Header';
import { decreaseHandler, increaseHandler, clearCart } from '../redux/shoppingCartSlice';
import OrderItem from '../components/OrderItem';
import orderApi from '../api/order';
import orderDetailsApi from '../api/orderDetails';
import Text from '../components/Text';
import CustomerInfomation from '../components/CustomerInfomation';
import numberFormatter from '../utilities/numberFormatter';

function OrderScreen({ 
    navigation, 
    cartItems, 
    currentUser, 
    totalMoney,
    clearCart, }) {

    const handleSubmit = async () => {
        try {
            if(cartItems.length === 0) return;

            const result = await orderApi.insertOrder(currentUser._id, totalMoney);
    
            if(result.ok){
                const resultGetLatestOrder = await orderApi.getLatestOrder(currentUser._id);
                if(resultGetLatestOrder.ok){
                    const order = resultGetLatestOrder.data;
                    cartItems.forEach(item => {
                        insertOrderDetails(order._id, item._id, item.cartCounter);
                    });
                    createAlert();
                    clearCart();
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const insertOrderDetails = async (orderId, productId, amount )=> {
        const res = await orderDetailsApi.insertOrderDetails(orderId, productId, amount);
        console.log('order details: ', res.data);
    }

    const createAlert = () =>
    Alert.alert(
      "Thông báo!",
      "Đặt hàng thành công.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Tiếp tục mua sắm", onPress: () => navigation.navigate('Home') }
      ],
      { cancelable: false }
    );
    
    return (
        <View style={styles.container}>
            <Header 
                title='Xác nhận đơn hàng' 
                onPress={() => navigation.goBack()}
            />
            <ScrollView style={styles.cartContainer}>
               <CustomerInfomation />
                { 
                    cartItems.map(item => {
                        return (
                            <OrderItem 
                                key={item._id.toString()}
                                name={item.name} 
                                price={numberFormatter(item.price)+ ' ₫'} 
                                cartCounter={'x' + item.cartCounter}
                                imageUrl={item.imageUrl}
                            />
                        );
                    }) 
                }
            </ScrollView>
            <View style={styles.orderContainer}>
                <View style={styles.totalContainer}>
                    <Text customStyle={styles.totalTitle}>Tổng tiền</Text>
                    <Text customStyle={styles.total}>{ numberFormatter(totalMoney) + ' ₫' }</Text>
                </View>
                <Button 
                    title='đặt hàng' 
                    color='brown'
                    customTitleStyle={styles.customButtonTitle}
                    customContainerStyle={styles.customButtonContainer}
                    onPress={handleSubmit}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    customButtonTitle: {
        color: colors.white
    },
    customButtonContainer: {
        flex: 1
    },
    customIconContainer: {
        backgroundColor: colors.grey,
        width: 35,
        height: 35,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: colors.white,
        padding: 5,
        alignItems: 'center',
    },
    orderContainer: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 5,
    },
    iconBackContainer: {
        marginLeft: 5,
        width: '10%'
    },
    iconContainer: {
        flexDirection: 'row',
        width: '10%',
        marginRight: 5,
    },
    totalContainer: {
        width: '40%',
        padding: 5,
    },
    totalTitle: {
        fontSize: 14
    },
    total: {
        fontWeight: 'bold',
        color: colors.red
    }
})

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        currentUser: state.auth.currentUser,
        totalMoney: state.cart.totalMoney
    }
}

const mapDispatch = {
    decreaseHandler,
    increaseHandler,
    clearCart,
}

export default connect(mapStateToProps, mapDispatch)(OrderScreen)