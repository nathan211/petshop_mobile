import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import Button from '../components/Button';
import colors from '../config/colors';
import Text from '../components/Text';
import { decreaseHandler, increaseHandler } from '../redux/shoppingCartSlice';
import OrderItem from '../components/OrderItem';
import orderApi from '../api/order';
import orderDetailsApi from '../api/orderDetails';

function OrderScreen({ navigation, cartItems, currentUser, totalMoney }) {

    const handleSubmit = async () => {
        try {
            const result = await orderApi.insertOrder(currentUser._id, totalMoney);
    
            if(result.ok){
                const resultGetLatestOrder = await orderApi.getLatestOrder(currentUser._id);
                if(resultGetLatestOrder.ok){
                    const order = resultGetLatestOrder.data;
                    cartItems.forEach(item => {
                        insertOrderDetails(order._id, item._id, item.cartCounter);
                    });
                    createAlert();
                }
            }
        } catch (error) {
            console.log(error);
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
             <View style={styles.header}>
                <View style={styles.iconBackContainer}>
                    <TouchableWithoutFeedback 
                        onPress={() => navigation.goBack()}
                    >
                        <Icon 
                            name='chevron-circle-left'
                            size={40}
                            color={colors.grey}
                        />
                    </TouchableWithoutFeedback>
                </View>
                <Text customStyle={{
                    width: '100%',
                    textAlign: 'center',
                    paddingRight: 80,
                }}>Xác nhận đơn hàng</Text>
            </View>
            <ScrollView style={styles.cartContainer}>
                <View style={styles.addressContainer}>
                    <View style={styles.addressWrapper}>
                        <Text customStyle={styles.addressTitle}>Địa chỉ giao hàng</Text>
                        <Text customStyle={styles.name}>
                            {currentUser.fullName + ' - ' + currentUser.phoneNumber}
                        </Text>
                        <Text customStyle={styles.address}>{currentUser.address}</Text>
                    </View>
                    <TouchableWithoutFeedback 
                        style={styles.deleteContainer}
                        onPress={() => console.log('delete')}
                    >
                        <Text customStyle={styles.delete}>Sửa</Text>
                    </TouchableWithoutFeedback>
                </View>
                { 
                    cartItems.map(item => {
                        return (
                            <OrderItem 
                                key={item._id.toString()}
                                name={item.name} 
                                price={item.price} 
                                cartCounter={item.cartCounter}
                            />
                        );
                    }) 
                }
            </ScrollView>
            <View style={styles.orderContainer}>
                <View style={styles.totalContainer}>
                    <Text customStyle={styles.totalTitle}>Tổng tiền</Text>
                    <Text customStyle={styles.total}>{ totalMoney }</Text>
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
    addressContainer: {
        backgroundColor: colors.white,
        width: '100%',
        height: 80,
        padding: 10,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    addressTitle: {
        fontSize: 14
    },
    address: {
        fontSize: 15
    },
    addressWrapper: {
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
    delete: {
        color: colors.secondary,
        fontSize: 14
    },
    name: {
        fontWeight: 'bold'
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
}

export default connect(mapStateToProps, mapDispatch)(OrderScreen)