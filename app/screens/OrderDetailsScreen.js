import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Alert } from 'react-native';
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
    const { _id, status } = route.params;

    useEffect(() => {
        getOrderDetails();
    }, []);

    const handleSubmit = async () => {
        try {
            const result = await orderApi.cancelOrder(_id);
            if(result.ok){
                navigation.goBack();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getOrderDetails = async () => {
        const result = await orderApi.getAllOrderDetails(_id);
        if(result.ok){
            setTotalMoney(result.data.totalMoney);
            setOrderDetails(result.data.orderDetails);
        }
    }

    const createAlert = () =>
    Alert.alert(
      "Thông báo!",
      "Bạn có chắc chắn muốn hủy đơn hàng không?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => handleSubmit()}
      ],
      { cancelable: false }
    );

    const renderStatus = (status) => {
        let text = '';

        if(status === 2){
            text = 'Đang xử lý';
        } else if(status === 3) {
            text = 'Đang giao';
        } else if(status === 4){
            text = 'Đã giao';
        } else  if(status === 5){
            text = 'Đã hủy';
        }

        return text;
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
                            imageUrl={item.product.imageUrl}
                        />
                    ))
                }
                <View style={styles.totalMoneyContainer}>
                    <Text customStyle={styles.status}>{ 'Trạng thái: ' + renderStatus(status)}</Text>
                </View>
                <View style={styles.totalMoneyContainer}>
                    <Text customStyle={styles.totalMoney}>{ 'Tổng tiền: ' + numberFormatter(totalMoney) + ' ₫'}</Text>
                </View>
            </ScrollView>
            {
                status === 2 ? 
                <Button 
                    title='Hủy' 
                    color='brown'
                    customTitleStyle={styles.customButtonTitle}
                    customContainerStyle={styles.customButtonContainer}
                    onPress={createAlert}
                /> : 
                <Button 
                    title='Hủy' 
                    color='medium'
                    customTitleStyle={styles.customButtonTitle}
                    customContainerStyle={styles.customButtonContainer}
                />
            }
            
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
        color: colors.red,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    totalMoneyContainer: {
        backgroundColor: colors.white,
        padding: 10,
        marginTop: 5,
    },
    status: {
        color: colors.medium,
        fontWeight: 'bold',
        marginLeft: 5,
    }
})

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
    }
}

const mapDispatch = {
  
}

export default connect(mapStateToProps, mapDispatch)(OrderDetailsScreen)
