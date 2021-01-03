import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';

import Button from '../components/Button';
import colors from '../config/colors';
import Header from '../components/Header';
import OrderItem from '../components/OrderItem';
import CustomerInfomation from '../components/CustomerInfomation';
import orderApi from '../api/order';
import numberFormatter from '../utilities/numberFormatter';
import Text from '../components/Text';

function OrderDetailsScreen({ navigation, route }) {
    const [orderDetails, setOrderDetails] = useState([]);
    const [totalMoney, setTotalMoney] = useState(0);
    const { _id } = route.params;

    useEffect(() => {
        getOrderDetails();
    }, []);

    const handleSubmit = () => {

    }

    const getOrderDetails = async () => {
        const result = await orderApi.getAllOrderDetails(_id);
        if(result.ok){
            setTotalMoney(result.data.totalMoney);
            setOrderDetails(result.data.orderDetails);
        }
    }

    return (
        <View style={styles.container}>
             <Header 
                title='Chi tiết đơn hàng' 
                onPress={() => navigation.goBack()}
            />
            <ScrollView style={styles.cartContainer}>
                <CustomerInfomation />
                {
                    orderDetails.map(item => (
                        <OrderItem 
                            name={item.product.name} 
                            price={numberFormatter(item.product.price) + ' ₫'} 
                            cartCounter={'Số lượng: ' + item.amount}
                            key={item.product._id}
                        />
                    ))
                }
                <View style={styles.totalMoneyContainer}>
                    <Text customStyle={styles.totalMoney}>{ 'Tổng tiền: ' + numberFormatter(totalMoney) + ' ₫'}</Text>
                </View>
            </ScrollView>
            <Button 
                title='Hủy' 
                color='brown'
                customTitleStyle={styles.customButtonTitle}
                customContainerStyle={styles.customButtonContainer}
                onPress={handleSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    customButtonTitle: {
        color: colors.white
    },
    customButtonContainer: {
    },
    totalMoney: {
        fontSize: 20,
        color: colors.red,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    totalMoneyContainer: {
        backgroundColor: colors.white,
        padding: 10,
        marginTop: 5,
    },
})

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
    }
}

const mapDispatch = {
  
}

export default connect(mapStateToProps, mapDispatch)(OrderDetailsScreen)
